declare module "@neos-project/neos-ui-backend-connector" {
    type MakeFetchRequest = (csrf: string) => RequestInit & { url?: string };

    interface RequestQueueItem {
        makeFetchRequest: MakeFetchRequest;
        resolve: (value?: any | undefined) => void;
        reject: (reason?: any) => void;
    }

    declare class FetchWithErrorHandling {
        /**
         * MAIN ENTRY POINT, replacing the "fetch" API.
         *
         * does a "fetch" request with a CSRF token and automatic relogin if a login error occurs.
         *
         * EXAMPLE
         *
         *      fetchWithErrorHandling.withCsrfToken((csrfToken) => ({
         *          url: "/neos/route",
         *          method: "POST",
         *          credentials: "include",
         *          headers: {
         *              'X-Flow-Csrftoken': csrfToken,
         *              'Content-Type': 'application/json'
         *          },
         *          body: JSON.stringify(
         *              args
         *          )
         *      })).catch(reason => fetchWithErrorHandling.generalErrorHandler(reason))
         *
         */
        public withCsrfToken(makeFetchRequest: MakeFetchRequest): Promise<any>;

        /**
         * Every request that is supposed to show an error message on failure (i.e. any request),
         * should end with this catch block:
         * `.catch(reason => fetchWithErrorHandling.generalErrorHandler(reason))`
         */
        public generalErrorHandler(reason: string | Error): void;

        /**
         * Safely parse JSON from response
         */
        public parseJson(response: Body): any;
    }
    export const fetchWithErrorHandling = new FetchWithErrorHandling();
}

declare module "@neos-project/neos-ui-i18n" {
    import React from "react";

    interface I18nProps {
        /**
         * Fallback key which gets rendered once the i18n service doesn't return a translation.
         */
        fallback?: string;

        /**
         * The target id which the i18n service accepts.
         */
        id?: string;

        /**
         * The destination paths for the package of the translation.
         */
        packageKey?: string;

        /**
         * The destination paths for the source of the translation.
         */
        sourceName?: string;

        /**
         * Additional parameters which are passed to the i18n service.
         */
        params?: object;

        /**
         * className which gets added to the translation span.
         */
        className?: string;
    }

    export default class I18n extends React.PureComponent<I18nProps> {}
}

declare module "@neos-project/neos-ui" {
    type Unsubscribe = () => void;
    // we dont require the @types/redux as they are deprecated
    export interface Store {
        dispatch(action: any): void;
        getState(): any;
        subscribe(listener: () => void): Unsubscribe;
    }
}

declare module "@neos-project/neos-ui-redux-store" {
    import { Node } from "@neos-project/neos-ts-interfaces";
    import { DefaultRootState } from "react-redux";

    type Selector<S> = (state: DefaultRootState) => S;

    type Selectors = {
        CR: {
            Nodes: {
                focusedSelector: Selector<Node | undefined>;
            };
        };
        System: {
            authenticationTimeout: Selector<boolean>;
        };

        UI: {
            Inspector: {
                transientValues: Selector<Record<string, { value: any }> | undefined>;
            };
        };
    };

    type Actions = {
        System: {
            authenticationTimeout(): any;
        };
        UI: {
            FlashMessages: {
                add(key: string, message: string, severity: "success" | "info" | "error", timeout?: number);
            };
        };
    };

    export const actions: Actions;
    export const selectors: Selectors;
}

declare module "@neos-project/neos-ui-decorators" {
    import { InferableComponentEnhancerWithProps, ConnectedProps } from "react-redux";
    import { GlobalRegistry } from "@neos-project/neos-ts-interfaces";

    export interface NeosContextInterface {
        globalRegistry: GlobalRegistry;
        configuration: {};
        routes: {};
    }

    /**
     * Infers the type of props that a neosifier will inject into a component.
     * we reuse this behavior from {@link ConnectedProps}
     */
    export type NeosifiedProps<TNeosifier> = ConnectedProps<TNeosifier>;

    export const NeosContext: React.Context<NeosContextInterface | null>;

    type MapRegistryToPropsParam<TStateProps> = (globalRegistry: GlobalRegistry) => TStateProps;

    interface Neos {
        <TStateProps = {}, TOwnProps = {}>(
            mapRegistryToProps: MapRegistryToPropsParam<TStateProps>,
        ): InferableComponentEnhancerWithProps<TStateProps & { neos: NeosContextInterface }, TOwnProps>;
    }

    export const neos: Neos;
}

declare module "@neos-project/neos-ui-extensibility" {
    import type { Store } from "@neos-project/neos-ui";
    import { GlobalRegistry, FrontendConfigurationRaw } from "@neos-project/neos-ts-interfaces";

    type BootstrapOptions = {
        store: Store;
        frontendConfiguration: FrontendConfigurationRaw;
        configuration;
        routes;
    };

    type Bootstrap = (globalRegistry: GlobalRegistry, bootstrapOptions: BootstrapOptions) => void;

    export default function manifest(identifier: string, options: {}, bootstrap: Bootstrap): void;

    export {
        SynchronousMetaRegistry,
        SynchronousRegistry,
    } from "@mhsdesign/esbuild-neos-ui-extensibility/@neos-project/neos-ui-extensibility/src/registry";
}

declare module "@neos-project/neos-ts-interfaces" {
    export type NodeContextPath = string;
    export type FusionPath = string;
    export type NodeTypeName = string;
    export type WorkspaceName = string;

    export type DimensionName = string;
    export type DimensionValue = string;
    export type DimensionPresetName = string;

    export type DimensionValues = DimensionValue[];

    export interface DimensionCombination {
        [propName: string]: DimensionValues;
    }

    export interface DimensionPresetCombination {
        [propName: string]: DimensionPresetName;
    }

    export interface PresetConfiguration {
        name?: string;
        label: string;
        values: DimensionValues;
        uriSegment: string;
    }

    export interface DimensionInformation {
        default: string;
        defaultPreset: string;
        label: string;
        icon: string;
        presets: {
            [propName: string]: PresetConfiguration;
        };
    }

    export interface ContextProperties {
        contextPath?: NodeContextPath;
        workspaceName?: WorkspaceName;
        invisibleContentShown?: boolean;
        removedContentShown?: boolean;
    }

    export interface NodeChild {
        contextPath: NodeContextPath;
        nodeType: NodeTypeName;
    }
    // TODO: for some reason (probably due to immer) I can not use ReadonlyArray here
    export interface NodeChildren extends Array<NodeChild> {}

    export interface NodePolicy
        extends Readonly<{
            disallowedNodeTypes: NodeTypeName[];
            canRemove: boolean;
            canEdit: boolean;
            disallowedProperties: string[];
        }> {}

    // TODO: for some reason (probably due to immer) I can not use Readonly here
    export interface Node {
        contextPath: NodeContextPath;
        name: string;
        identifier: string;
        nodeType: NodeTypeName;
        label: string;
        isAutoCreated: boolean;
        depth: number;
        children: NodeChildren;
        matchesCurrentDimensions: boolean;
        properties: {
            [propName: string]: any;
        };
        isFullyLoaded: boolean;
        uri: string;
        parent: NodeContextPath;
        policy?: NodePolicy;
        dimensions?: DimensionPresetCombination;
        otherNodeVariants?: DimensionPresetCombination[];
    }

    // Type guard using duck-typing on some random properties to know if object is a Node
    export function isNode(node: any): node is Node;

    export interface NodeMap {
        [propName: string]: Node | undefined;
    }

    export enum ClipboardMode {
        COPY = "Copy",
        MOVE = "Move",
    }

    export enum InsertPosition {
        INTO = "into",
        BEFORE = "before",
        AFTER = "after",
    }

    export enum SelectionModeTypes {
        SINGLE_SELECT = "SINGLE_SELECT",
        MULTIPLE_SELECT = "MULTIPLE_SELECT",
        RANGE_SELECT = "RANGE_SELECT",
    }

    export interface ValidatorConfiguration {
        [propName: string]: any;
    }

    export interface PropertyConfiguration {
        type?: string;
        ui?: {
            label?: string;
            reloadIfChanged?: boolean;
            inline?: {
                editor?: string;
                editorOptions?: {
                    [propName: string]: any;
                };
            };
            inlineEditable?: boolean;
            inspector?: {
                hidden?: boolean;
                defaultValue?: string;
                editor?: string;
                editorOptions?: {
                    [propName: string]: any;
                };
                group?: string;
                position?: number | string;
            };
            help?: {
                message?: string;
                thumbnail?: string;
            };
            aloha?: any; // deprecated format
        };
        validation?: {
            [propName: string]: ValidatorConfiguration | undefined;
        };
    }

    export interface NodeType {
        name?: string;
        superTypes: {
            [propName: string]: boolean | undefined;
        };
        constraints: {
            nodeTypes: {
                [propName: string]: boolean | undefined;
            };
        };
        label?: string;
        ui?: {
            group?: string;
            icon?: string;
            label?: string;
            position?: number | string;
            inlineEditable?: boolean;
            inspector?: {
                groups?: {
                    [propName: string]:
                        | {
                              title?: string;
                              label?: string;
                              icon?: string;
                              tab?: string;
                              position?: number | string;
                              collapsed?: boolean;
                          }
                        | undefined;
                };
                tabs?: {
                    [propName: string]:
                        | {
                              label?: string;
                              position?: number | string;
                              icon?: string;
                          }
                        | undefined;
                };
                views?: {
                    [propName: string]: {
                        group?: string;
                        label?: string;
                        position?: number | string;
                        helpMessage?: string;
                        view?: string;
                        viewOptions?: {
                            [propName: string]: any;
                        };
                    };
                };
            };
            creationDialog?: {
                elements?: {
                    [propName: string]: {
                        type?: string;
                        ui?: {
                            label?: string;
                            editor?: string;
                            editorOptions?: {
                                [propName: string]: any;
                            };
                        };
                        validation?: {
                            [propName: string]: {
                                [propName: string]: any;
                            };
                        };
                    };
                };
            };
        };
        properties?: {
            [propName: string]: PropertyConfiguration | undefined;
        };
    }

    //
    // Change object from our Changes API
    //
    export interface Change
        extends Readonly<{
            type: string;
            subject: NodeContextPath;
            payload: {
                propertyName: string;
                value: any;
            };
        }> {}

    import { SynchronousMetaRegistry, SynchronousRegistry } from "@neos-project/neos-ui-extensibility";

    import React from "react";

    // TODO: move to nodetypesregistry itself
    export interface NodeTypesRegistry extends SynchronousRegistry<NodeType> {
        get: (nodeType: NodeTypeName) => NodeType | null;
        getRole: (roleName: string) => NodeTypeName | null;
        getSubTypesOf: (nodeType: NodeTypeName) => NodeTypeName[];
        getAllowedNodeTypesTakingAutoCreatedIntoAccount: (
            isSubjectNodeAutocreated: boolean,
            referenceParentName: string,
            referenceParentNodeType: NodeTypeName,
            referenceGrandParentNodeType: NodeTypeName | null,
            role: string,
        ) => NodeTypeName[];
    }

    // TODO: move to validatorsregistry itself
    type Validator = (values: {}, elementConfigurations: any) => null | {} | string;

    export interface ValidatorRegistry extends SynchronousRegistry<Validator> {}

    export interface I18nRegistry extends SynchronousRegistry<string> {
        translate: (
            id?: string,
            fallback?: string,
            params?: {},
            packageKey?: string,
            sourceName?: string,
            quantity?: 0,
        ) => string;
    }

    /**
     * Component Wiring
     *
     * {@link https://docs.neos.io/cms/manual/extending-the-user-interface/react-extensibility-api#component-wiring}
     */
    export type EditorProps<Options = {}, Value = any> = {
        /**
         * an identifier which can be used for HTML ID generation
         * @example
         *  "__neos__editor__property---{propertyName}"
         */
        id?: string;
        /** name of the node property to edit */
        identifier: string;
        /**
         * label of the node property
         * to be possibly translated via i18n.translate(label)
         *
         * recommended, when {@link RegisteredEditor.hasOwnLabel} = true is used
         *
         *  @example
         * ```jsx
         *  <Label htmlFor={this.props.id}>
         *      <I18n id={this.props.label} />
         *      {this.props.renderHelpIcon()}
         *  </Label>
         * ```
         */
        label: string;
        /** additional editor options of the `editorOptions` */
        options: Options;
        /**
         * currently edited property value of the node
         * is reactive - eg updates on discard and commit
         */
        value?: Value;
        /**
         * @param secondaryInspectorName identifier, used to implement toggling of the inspector when calling this method twice.
         * @param secondaryInspectorComponentFactory factory for the secondary inspector content or undefined|null to close the secondary inspector
         * @example
         *  props.renderSecondaryInspector('IMAGE_CROPPING', () => <MySecondaryInspectorContent />)
         */
        renderSecondaryInspector(
            secondaryInspectorName: string,
            secondaryInspectorComponentFactory: () => JSX.Element | undefined | null,
        ): void;
        /**
         * register value change of the node property, which can be applied or discarded
         *
         * @param value the new value.
         * @param hooks an object whose keys are saveHooks to be triggered, the values are hook-specific options: Example: `{'Neos.UI:Hook.BeforeSave.CreateImageVariant': nextImage}`
         */
        commit(value: Value, hooks?: Record<string, unknown>): void;
        /**
         * unsets the property
         *
         * @param value an empty string to unset the property
         */
        commit(value: "", hooks?: Record<string, unknown>): void;

        // unofficial api
        /** name of the editor `Foo.Bar/EditorName` */
        editor: string;
        /**
         * renders toggleable button
         *
         * see for an examle:
         * {@link EditorProps.label}
         */
        renderHelpIcon(): JSX.Element | "";
        hooks?: Record<string, unknown>;
        editorRegistry: EditorRegistry;
        i18nRegistry: I18nRegistry;
        /** applies any pending changes (as if you clicked the apply button) */
        onEnterKey(): void;
        helpMessage?: string;
        helpThumbnail?: string;
        /** the value has pending changes (was changed via commit) */
        highlight?: boolean;
        /**
         * styles an orange or red box-shadow
         * around the element the class is applied
         * to indicate pending changes or failure on validation errors
         *
         * @example
         * ```css
         *  box-shadow: 0 0 0 2px /^(red|orange)$/;
         *  border-radius: 2px;
         * ```
         */
        className: string;
    };

    interface RegisteredEditor {
        /** Editor component to use */
        component: React.ComponentType<any>;
        /**
         * No label of the property and helpmessage will be rendered above the component.
         *
         * You need to render the label internally in the component
         * @example
         * ```jsx
         *  <Label htmlFor={this.props.id}>
         *      <I18n id={this.props.label} />
         *      {this.props.renderHelpIcon()}
         *  </Label>
         * ```
         */
        hasOwnLabel?: boolean;
    }

    interface EditorRegistry extends SynchronousRegistry<RegisteredEditor> {}

    interface InspectorRegistry extends SynchronousMetaRegistry<any> {
        get: <K extends "editors" | "secondaryEditors">(
            key: K,
        ) => K extends "editors" ? EditorRegistry : K extends "secondaryEditors" ? EditorRegistry : never;
    }

    type VendorPackageName = string;
    type NeosUiOption = string;
    type Configuration = unknown;

    type FrontendConfigurationRaw = Record<VendorPackageName | NeosUiOption, Configuration>;

    export interface FrontendConfigurationRegistry extends SynchronousRegistry<Configuration> {
        get: (firstLevelKey: VendorPackageName | NeosUiOption) => Configuration | null;
    }

    export interface GlobalRegistry extends SynchronousMetaRegistry<any> {
        get: <K extends "i18n" | "validators" | "inspector" | "frontendConfiguration">(
            key: K,
        ) => K extends "i18n"
            ? I18nRegistry
            : K extends "validators"
              ? ValidatorRegistry
              : K extends "inspector"
                ? InspectorRegistry
                : K extends "frontendConfiguration"
                  ? FrontendConfigurationRegistry
                  : never;
    }
}

declare module "@neos-project/react-ui-components" {
    import enhanceWithClickOutside from "@neos-project/react-ui-components/lib-esm/enhanceWithClickOutside";
    import Badge from "@neos-project/react-ui-components/lib-esm/Badge/badge";
    import Bar from "@neos-project/react-ui-components/lib-esm/Bar/bar";
    import Button from "@neos-project/react-ui-components/lib-esm/Button/button";
    import ButtonGroup from "@neos-project/react-ui-components/lib-esm/ButtonGroup/buttonGroup";
    import CheckBox from "@neos-project/react-ui-components/lib-esm/CheckBox/checkBox";
    import DateInput from "@neos-project/react-ui-components/lib-esm/DateInput/dateInput";
    import Dialog from "@neos-project/react-ui-components/lib-esm/Dialog/dialog";
    import DropDown from "@neos-project/react-ui-components/lib-esm/DropDown/wrapper";
    import Frame from "@neos-project/react-ui-components/lib-esm/Frame/frame";
    import Headline from "@neos-project/react-ui-components/lib-esm/Headline/headline";
    import Icon from "@neos-project/react-ui-components/lib-esm/Icon/icon";
    import IconButton from "@neos-project/react-ui-components/lib-esm/IconButton/iconButton";
    import IconButtonDropDown from "@neos-project/react-ui-components/lib-esm/IconButtonDropDown/iconButtonDropDown";
    import Label from "@neos-project/react-ui-components/lib-esm/Label/label";
    // @ts-expect-error not correctly exported
    import Logo from "@neos-project/react-ui-components/lib-esm/Logo";
    // @ts-expect-error not correctly exported
    import SelectBox from "@neos-project/react-ui-components/lib-esm/SelectBox";
    import SideBar from "@neos-project/react-ui-components/lib-esm/SideBar/sideBar";
    import Tabs from "@neos-project/react-ui-components/lib-esm/Tabs/tabs";
    import TextArea from "@neos-project/react-ui-components/lib-esm/TextArea/textArea";
    import TextInput from "@neos-project/react-ui-components/lib-esm/TextInput/textInput";
    // @ts-expect-error not correctly exported
    import ToggablePanel from "@neos-project/react-ui-components/lib-esm/ToggablePanel";
    import Tooltip from "@neos-project/react-ui-components/lib-esm/Tooltip/tooltip";
    // @ts-expect-error not correctly exported
    import Tree from "@neos-project/react-ui-components/lib-esm/Tree";
    // @ts-expect-error not correctly exported
    import MultiSelectBox from "@neos-project/react-ui-components/lib-esm/MultiSelectBox";
    // @ts-expect-error not correctly exported
    import MultiSelectBox_ListPreviewSortable from "@neos-project/react-ui-components/lib-esm/MultiSelectBox_ListPreviewSortable";
    // @ts-expect-error not correctly exported
    import SelectBox_Option_SingleLine from "@neos-project/react-ui-components/lib-esm/SelectBox_Option_SingleLine";
    // @ts-expect-error not correctly exported
    import SelectBox_Option_MultiLineWithThumbnail from "@neos-project/react-ui-components/lib-esm/SelectBox_Option_MultiLineWithThumbnail";

    module "react" {
        // the removed SFC is used, which nearly equals the FC
        export type SFC<P = {}> = FC<P>;
    }

    export {
        enhanceWithClickOutside,
        Badge,
        Bar,
        Button,
        ButtonGroup,
        CheckBox,
        DateInput,
        Dialog,
        DropDown,
        Frame,
        Headline,
        Icon,
        IconButton,
        IconButtonDropDown,
        Label,
        Logo,
        SelectBox,
        SideBar,
        Tabs,
        TextArea,
        TextInput,
        ToggablePanel,
        Tooltip,
        Tree,
        MultiSelectBox,
        MultiSelectBox_ListPreviewSortable,
        SelectBox_Option_SingleLine,
        SelectBox_Option_MultiLineWithThumbnail,
    };
}
