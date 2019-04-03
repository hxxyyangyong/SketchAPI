const fs = require('fs')
const path = require('path')

const actions = [
  'AddAsLibrary',
  'AddBorder',
  'AddExportFormat',
  'AddFill',
  'AddFlow',
  'AddFlowBack',
  'AddFlowHome',
  'AddInnerShadow',
  'AddShadow',
  'AlignBottom',
  'AlignCenter',
  'AlignJustified',
  'AlignLayersBottom',
  'AlignLayersCenter',
  'AlignLayersLeft',
  'AlignLayersMiddle',
  'AlignLayersRight',
  'AlignLayersTop',
  'AlignLeft',
  'AlignMiddle',
  'AlignRight',
  'AlignTop',
  'AlignmentActions',
  'ApplyHorizontalFlip',
  'ApplyLandscapeOrientation',
  'ApplyPortraitOrientation',
  'ApplySharedLayerStyle',
  'ApplySharedTextStyle',
  'ApplyVerticalFlip',
  'AssignColorSpace',
  'AutoExpandGroups',
  'BackToInstance',
  'BadgeMenu',
  'BadgeMenu',
  'BaseAlignLayers',
  'BaseStyle',
  'BooleanActionGroup',
  'BooleanMenu',
  'CenterLayersInCanvas',
  'CenterSelectionInVisibleArea',
  'ChangeFlowAnimationFromBottomAnimation',
  'ChangeFlowAnimationFromLeftAnimation',
  'ChangeFlowAnimationFromRightAnimation',
  'ChangeFlowAnimationFromTopAnimation',
  'ChangeFlowAnimationNoAnimation',
  'ChangeFont',
  'ClippingMask',
  'ClippingMaskMode',
  'ClosePath',
  'Cloud',
  'CollapseAllGroups',
  'ColorInspectorCircularGradientTab',
  'ColorInspectorColorTab',
  'ColorInspectorImageTab',
  'ColorInspectorLinearGradientTab',
  'ColorInspectorModeBorderTouchBarGroup',
  'ColorInspectorModeFillTouchBarGroup',
  'ColorInspectorModePicker',
  'ColorInspectorRadialGradientTab',
  'ConstraintFixHeight',
  'ConstraintFixWidth',
  'ConstraintPinBottom',
  'ConstraintPinLeft',
  'ConstraintPinRight',
  'ConstraintPinTop',
  'ConstraintReset',
  'ConvertColorSpace',
  'ConvertFlowToHotspot',
  'ConvertSymbolOrDetachInstances',
  'ConvertToOutlines',
  'Copy',
  'CopyCSSAttributes',
  'CopySVGCode',
  'CopyStyle',
  'CreateSharedStyle',
  'CreateSymbol',
  'CurveModeAsymmetric',
  'CurveModeDisconnected',
  'CurveModeMirrored',
  'CurveModeStraight',
  'CurveModeTouchGroup',
  'Cut',
  'Data',
  'DataMenu',
  'DefaultStyle',
  'Delete',
  'DetachSharedStyle',
  'Difference',
  'DistributeActions',
  'DistributeHorizontally',
  'DistributeVertically',
  'Duplicate',
  'Edit',
  'EditColorSpace',
  'Export',
  'ExportPDFBook',
  'ExportSelectionWithExportFormats',
  'FindLayer',
  'Flatten',
  'FlattenSelection',
  'FlipHorizontal',
  'FlipVertical',
  'FollowFlow',
  'GridSettings',
  'Group',
  'GroupActionGroup',
  'HideAllGridsAndLayouts',
  'HideLayer',
  'IgnoreClippingMask',
  'ImageOriginalSize',
  'IncompatiblePluginsDisabled',
  'InsertArrow',
  'InsertArtboard',
  'InsertHotspot',
  'InsertImage',
  'InsertLine',
  'InsertMenu',
  'InsertSharedText',
  'InsertSlice',
  'InsertSymbol',
  'InsertTextLayer',
  'InsertVector',
  'Intersect',
  'Join',
  'LayerFocusActions',
  'LayerHeightFocus',
  'LayerWidthFocus',
  'LayerXFocus',
  'LayerYFocus',
  'LayoutSettings',
  'LicenseExpired',
  'ListTypeActionBullet',
  'ListTypeActionNone',
  'ListTypeActionNumbered',
  'LockLayer',
  'Magnifier',
  'MakeGrid',
  'MakeLowercase',
  'MakeUppercase',
  'ManageShareableObjects',
  'MaskWithShape',
  'Mirror',
  'MoveActionGroup',
  'MoveBackward',
  'MoveForward',
  'MoveToBack',
  'MoveToFront',
  'MoveToTop',
  'MoveUpHierarchy',
  'NewPage',
  'NextPage',
  'OffsetPath',
  'OpenPreview',
  'OpenStyleInLibrary',
  'OpenSymbolInLibrary',
  'OvalShape',
  'Paste',
  'PasteHere',
  'PasteOverSelection',
  'PasteStyle',
  'Pencil',
  'PolygonShape',
  'PreviewAtActualSize',
  'PreviousPage',
  'Print',
  'RectangleShape',
  'Redo',
  'ReduceFileSize',
  'ReduceImageSize',
  'RemoveAllOverrides',
  'RemoveFlow',
  'RemoveTextTransform',
  'RemoveUnusedStyles',
  'RenameLayer',
  'ReplaceColor',
  'ReplaceFonts',
  'ReplaceImage',
  'ReplaceWithSymbol',
  'ResetOrigin',
  'ResetSharedStyle',
  'ResetSymbolSize',
  'ResizeArtboardToFit',
  'RevealInLayerList',
  'ReversePath',
  'Rotate',
  'RotateClockwise',
  'RotateCounterclockwise',
  'RoundToPixel',
  'RoundedRectangleShape',
  'SaveAsTemplate',
  'Scale',
  'Scissors',
  'SelectAll',
  'SelectAllArtboards',
  'SendToSymbolsPage',
  'Shape',
  'ShowBorderOptions',
  'ShowColors',
  'ShowFillOptions',
  'ShowFonts',
  'ShowReplaceColorSheet',
  'SmartRotate',
  'StarShape',
  'Subtract',
  'SyncLibrary',
  'SyncLocalStyle',
  'TextAlignTouchBarGroup',
  'TextOnPath',
  'TextStyleTouchBar',
  'ToggleAlignmentGuides',
  'ToggleArtboardShadow',
  'ToggleBorder',
  'ToggleFill',
  'ToggleFixToViewport',
  'ToggleFlowInteraction',
  'ToggleGrid',
  'ToggleInspectorVisibility',
  'ToggleInterface',
  'ToggleLayerHighlight',
  'ToggleLayerListVisibility',
  'ToggleLayout',
  'TogglePixelGrid',
  'TogglePixelLines',
  'ToggleRulerDragLocking',
  'ToggleRulers',
  'ToggleSelection',
  'ToggleSliceInteraction',
  'ToggleToolbarVisibility',
  'ToolsMenu',
  'Transform',
  'TriangleShape',
  'Underline',
  'Undo',
  'Ungroup',
  'Union',
  'UnlinkAndSyncFromLibrary',
  'UnlinkFromLibrary',
  'UpdatePlugins',
  'ViewMenu',
  'Zoom',
  'ZoomActions',
  'ZoomIn',
  'ZoomOut',
  'ZoomToActualSize',
  'ZoomToArtboard',
  'ZoomToSelection',
]

const fakeActions = [
  'HandleURL',
  'RunPluginCommand',
  'HandlerGotFocus',
  'HandlerLostFocus',
  'LayersMoved',
  'TextChanged',
  'OpenDocument',
  'CloseDocument',
  'ExportSlices',
  'SelectionChanged',
  'ArtboardChanged',
  'DocumentSaved',
]

const specialActions = ['Startup', 'Shutdown']

const allActions = actions.concat(fakeActions).concat(specialActions)

const actionsPath = path.join(__dirname, '../docs/actions')

if (!fs.existsSync(actionsPath)) {
  fs.mkdirSync(actionsPath)
}

allActions.forEach(action => {
  const actionPath = path.join(actionsPath, `${action}.md`)
  if (fs.existsSync(actionPath)) {
    return
  }
  fs.writeFileSync(
    actionPath,
    `---
title: ${action}
summary: work in progress
---

Work In Progress

Documentation for the ${action} action will appear here.
`,
    'utf8'
  )
  console.log(`Generated file for ${action}`)
})