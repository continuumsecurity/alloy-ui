# AUI Diagram Builder

> Documentation and test modifications are not included in this changelog. For more details, see [full commit history](https://github.com/liferay/alloy-ui/commits/master/src/aui-diagram-builder).

## @VERSION@

## [4.1.1](https://github.com/continuumsecurity/alloy-ui/releases/tag/4.1.1)

* IR-2876 Simplify to use only the minifies on the builds

## [4.1.0](https://github.com/continuumsecurity/alloy-ui/releases/tag/4.1.0)

* IR-2500 Simplify to use only dependencies necessaries in diagram
* IR-2500 Add mouse move for groups and nodes

## [4.0.0](https://github.com/continuumsecurity/alloy-ui/releases/tag/4.0.0)

* IR-2756 Use id instead the name on move task
* IR-2756 expose id of the tasks to use it as a main attribute
* IR-2766 Use id instead the name on trasitions

## [3.4.0](https://github.com/continuumsecurity/alloy-ui/releases/tag/3.4.0)

* IR-2255 Util to fix position in popups
* IR-2255 Added Node Right click Event
* IR-2257 Added Connector Right Click Event
* IR-2257 Added Connector Left Click Event
* IR-2257 Added Node Id Attribute
* IR-2257 Added Connector Id Attribute

## [3.3.0](https://github.com/continuumsecurity/alloy-ui/releases/tag/3.3.0)

* Task nodes can't move outside of their parent group 

## [3.2.0](https://github.com/continuumsecurity/alloy-ui/releases/tag/3.2.0)

* Group can have children attached that will be moved as the Group is moved (drag&drop)
* Disable delete by hiding the button and by key pressing
* New Group Node
* Custom Mouseover function for transitions  
* Disables deleting from key events
* Option to set height and width of Task and Group nodes
* Option to disable manual linking from Task to Task
* [AUI-1354](https://issues.liferay.com/browse/AUI-1354) Make aui-diagram-builder accessible

## [3.0.3](https://github.com/liferay/alloy-ui/releases/tag/3.0.3)

No changes.

## [3.0.2](https://github.com/liferay/alloy-ui/releases/tag/3.0.2)

No changes.

## [3.0.1](https://github.com/liferay/alloy-ui/releases/tag/3.0.1)

* [AUI-1849](https://issues.liferay.com/browse/AUI-1849) XSS issue in AUI Diagram Builder node label

## [3.0.0](https://github.com/liferay/alloy-ui/releases/tag/3.0.0)

* [AUI-1666](https://issues.liferay.com/browse/AUI-1666) XSS issue in AUI Diagram Builder
* [AUI-1332](https://issues.liferay.com/browse/AUI-1332) Decouple property list panel from the diagram builder
* [AUI-1317](https://issues.liferay.com/browse/AUI-1317) Diagram Builder scrolls infinitely when dragging nodes near canvas borders
* [AUI-1328](https://issues.liferay.com/browse/AUI-1328) Move automated tasks from Grunt to Gulp
* [AUI-1287](https://issues.liferay.com/browse/AUI-1287) Wrong css formatting when running "grunt format"
* [AUI-1174](https://issues.liferay.com/browse/AUI-1174) Validate source code with JSHint
* [AUI-1236](https://issues.liferay.com/browse/AUI-1236) Add .table class to DataTable on Bootstrap 3
* [AUI-1224](https://issues.liferay.com/browse/AUI-1224) Add .glyphicon and change prefix from .icon-* to .glyphicon-* on Bootstrap 3
* [AUI-1158](https://issues.liferay.com/browse/AUI-1158) Diagram Builder connections jump if diagram area is scrollable

## [2.5.0](https://github.com/liferay/alloy-ui/releases/tag/2.5.0)

* [AUI-1203](https://issues.liferay.com/browse/AUI-1203) Moving a node in the Diagram Builder changes the scrollbar of window instead of canvas scroll
* [AUI-1191](https://issues.liferay.com/browse/AUI-1191) Browser redirects page when trying to delete the selected connector
* [AUI-1163](https://issues.liferay.com/browse/AUI-1163) Remove unnecessary constants
* [AUI-1111](https://issues.liferay.com/browse/AUI-1111) Diagram Builder nodes cannot be deleted
