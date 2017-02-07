// iiif-metadata-component v1.0.10 https://github.com/viewdir/iiif-metadata-component#readme

declare namespace IIIFComponents {
    class StringValue {
        value: string;
        constructor(value?: string);
        toString(): string;
    }
}

/// <reference path="StringValue.d.ts" />
/// <reference path="LimitType.d.ts" />

declare namespace IIIFComponents {
    interface IMetadataComponent extends _Components.IBaseComponent {
    }
}

declare namespace IIIFComponents {
    interface IMetadataComponentContent {
        attribution: string;
        canvasHeader: string;
        copiedToClipboard: string;
        copyToClipboard: string;
        description: string;
        imageHeader: string;
        less: string;
        license: string;
        logo: string;
        manifestHeader: string;
        more: string;
        noData: string;
        rangeHeader: string;
        sequenceHeader: string;
    }
    interface IMetadataComponentData {
        canvasDisplayOrder: string;
        canvases: Manifesto.ICanvas[] | null;
        canvasExclude: string;
        canvasLabels: string;
        content: IMetadataComponentContent;
        copiedMessageDuration: number;
        copyToClipboardEnabled: boolean;
        helper: Manifold.IHelper | null;
        licenseFormatter: Manifold.UriLabeller | null;
        limit: number;
        limitType: MetadataComponentOptions.LimitType;
        manifestDisplayOrder: string;
        manifestExclude: string;
        range: Manifesto.IRange | null;
        rtlLanguageCodes: string;
        sanitizer: (html: string) => string;
        showAllLanguages: boolean;
    }
}

declare namespace IIIFComponents.MetadataComponentOptions {
    class LimitType extends StringValue {
        static LINES: LimitType;
        static CHARS: LimitType;
    }
}

import MetadataItem = Manifold.IMetadataItem;
import MetadataGroup = Manifold.MetadataGroup;
declare type csvvalue = string | null;
declare namespace IIIFComponents {
    class MetadataComponent extends _Components.BaseComponent implements IMetadataComponent {
        options: _Components.IBaseComponentOptions;
        private _$copyTextTemplate;
        private _$metadataGroups;
        private _$metadataGroupTemplate;
        private _$metadataItemTemplate;
        private _$metadataItemValueTemplate;
        private _$metadataItemURIValueTemplate;
        private _$noData;
        private _metadataGroups;
        constructor(options: _Components.IBaseComponentOptions);
        protected _init(): boolean;
        data(): IMetadataComponentData;
        private _getManifestGroup();
        private _getCanvasGroups();
        set(): void;
        private _sort(items, displayOrder);
        private _label(groups, labels);
        private _exclude(items, excludeConfig);
        private _normalise(value);
        private _render();
        private _buildMetadataGroup(metadataGroup);
        private _buildMetadataItem(item);
        private _getItemLocale(item);
        private _buildMetadataItemValue(value, locale);
        private _buildMetadataItemURIValue(value);
        private _addReadingDirection($elem, locale);
        private _addCopyButton($elem, $header, $values);
        private _copyItemValues($copyButton, originalValue);
        private _readCSV(config, normalise?);
        private _sanitize(html);
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.MetadataComponent {
    class Events {
    }
}
