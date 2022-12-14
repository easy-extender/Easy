/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/app/Footer.ts":
/*!********************************!*\
  !*** ./src/main/app/Footer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Footer = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/style.ts\");\r\nclass Footer {\r\n    constructor() {\r\n        var element = html_1.html.div(style_1.style.Footer);\r\n        element.textContent = '© Easy Extender 2022, All Rights Reserved';\r\n        // init\r\n        this.element = element;\r\n    }\r\n}\r\nexports.Footer = Footer;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/Footer.ts?");

/***/ }),

/***/ "./src/main/app/Header.ts":
/*!********************************!*\
  !*** ./src/main/app/Header.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Header = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/style.ts\");\r\nclass Header {\r\n    constructor(version) {\r\n        const element = html_1.html.div(style_1.style.Header);\r\n        const h1 = html_1.html.h1(style_1.style.Title);\r\n        const p = html_1.html.p(style_1.style.Paragraph);\r\n        h1.textContent = 'Easy Toolset Documentation (Unity Plugin)';\r\n        p.textContent = `Version: ` + version;\r\n        element.append(h1, p);\r\n        // init\r\n        this.element = element;\r\n    }\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/Header.ts?");

/***/ }),

/***/ "./src/main/app/MainArea.ts":
/*!**********************************!*\
  !*** ./src/main/app/MainArea.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MainArea = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/style.ts\");\r\nclass MainArea {\r\n    constructor() {\r\n        var element = html_1.html.div(style_1.style.MainArea);\r\n        // init\r\n        this.element = element;\r\n    }\r\n}\r\nexports.MainArea = MainArea;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/MainArea.ts?");

/***/ }),

/***/ "./src/main/app/PageArea/PageArea.ts":
/*!*******************************************!*\
  !*** ./src/main/app/PageArea/PageArea.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PageArea = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/PageArea/style.ts\");\r\nclass PageArea {\r\n    constructor() {\r\n        const element = html_1.html.div(style_1.style.PageArea);\r\n        // init\r\n        this.element = element;\r\n    }\r\n}\r\nexports.PageArea = PageArea;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/PageArea/PageArea.ts?");

/***/ }),

/***/ "./src/main/app/PageArea/index.ts":
/*!****************************************!*\
  !*** ./src/main/app/PageArea/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PageArea = void 0;\r\nvar PageArea_1 = __webpack_require__(/*! ./PageArea */ \"./src/main/app/PageArea/PageArea.ts\");\r\nObject.defineProperty(exports, \"PageArea\", ({ enumerable: true, get: function () { return PageArea_1.PageArea; } }));\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/PageArea/index.ts?");

/***/ }),

/***/ "./src/main/app/PageArea/style.ts":
/*!****************************************!*\
  !*** ./src/main/app/PageArea/style.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.style = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nexports.style = html_1.html.style({\r\n    PageArea: {\r\n        \"padding-left\": \"10px\",\r\n        \"flex-grow\": 1,\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/PageArea/style.ts?");

/***/ }),

/***/ "./src/main/app/SideBar/List/Indent.ts":
/*!*********************************************!*\
  !*** ./src/main/app/SideBar/List/Indent.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TextElement = exports.Indent = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/SideBar/List/style.ts\");\r\nfunction Indent(depth) {\r\n    const element = html_1.html.div(style_1.style.Indent);\r\n    element.style.width = (depth * 16) + 'px';\r\n    return element;\r\n}\r\nexports.Indent = Indent;\r\nfunction TextElement(text) {\r\n    const element = html_1.html.div('Text');\r\n    element.textContent = text;\r\n    return element;\r\n}\r\nexports.TextElement = TextElement;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/SideBar/List/Indent.ts?");

/***/ }),

/***/ "./src/main/app/SideBar/List/Item.ts":
/*!*******************************************!*\
  !*** ./src/main/app/SideBar/List/Item.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Item = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst Indent_1 = __webpack_require__(/*! ./Indent */ \"./src/main/app/SideBar/List/Indent.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/SideBar/List/style.ts\");\r\nclass Item {\r\n    constructor(info, callback) {\r\n        const element = html_1.html.div(info.isMember ? style_1.style.MemberItem : style_1.style.Item);\r\n        element.onclick = () => callback(info.path);\r\n        const textElement = html_1.html.div('Text');\r\n        textElement.textContent = info.name;\r\n        element.append((0, Indent_1.Indent)(info.depth - 1), textElement);\r\n        // init\r\n        this.element = element;\r\n    }\r\n    SetActive(active) {\r\n        this.element.classList.toggle(\"Active\", active);\r\n    }\r\n}\r\nexports.Item = Item;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/SideBar/List/Item.ts?");

/***/ }),

/***/ "./src/main/app/SideBar/List/List.ts":
/*!*******************************************!*\
  !*** ./src/main/app/SideBar/List/List.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.List = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst Indent_1 = __webpack_require__(/*! ./Indent */ \"./src/main/app/SideBar/List/Indent.ts\");\r\nconst Item_1 = __webpack_require__(/*! ./Item */ \"./src/main/app/SideBar/List/Item.ts\");\r\nconst Seperator_1 = __webpack_require__(/*! ./Seperator */ \"./src/main/app/SideBar/List/Seperator.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/SideBar/List/style.ts\");\r\nclass List {\r\n    constructor() {\r\n        let element = html_1.html.div(style_1.style.List);\r\n        // init\r\n        this.element = element;\r\n        this._items = new Map();\r\n    }\r\n    render(pages, callback) {\r\n        let itemSet = new Set();\r\n        for (const page of pages) {\r\n            let pageSegments = page.segments;\r\n            let depth = pageSegments.length;\r\n            let currentPath = '';\r\n            for (let i = 0; i < depth; ++i) {\r\n                currentPath += '/' + pageSegments[i];\r\n                if (itemSet.has(currentPath)) {\r\n                    continue;\r\n                }\r\n                else {\r\n                    if (i == depth - 1) {\r\n                        this.addItem(page, callback);\r\n                    }\r\n                    else {\r\n                        this.addGroup(pageSegments[i], i);\r\n                    }\r\n                    itemSet.add(currentPath);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    addItem(page, callback) {\r\n        let item = new Item_1.Item(page, callback);\r\n        this.element.append(item.element);\r\n        this._items.set(page.path, item);\r\n    }\r\n    addGroup(text, depth) {\r\n        const element = html_1.html.div(style_1.style.Group);\r\n        if (depth > 0) {\r\n            element.appendChild((0, Indent_1.Indent)(depth));\r\n        }\r\n        element.appendChild((0, Indent_1.TextElement)(text));\r\n        this.element.append(element);\r\n    }\r\n    addSeperator() {\r\n        this.element.append(new Seperator_1.Seperator().element);\r\n    }\r\n    SetActive(name) {\r\n        const items = this._items.values();\r\n        for (const item of items) {\r\n            item.SetActive(false);\r\n        }\r\n        const targetItem = this._items.get(name);\r\n        targetItem.SetActive(true);\r\n    }\r\n}\r\nexports.List = List;\r\nfunction last(array) {\r\n    return array.length == 0\r\n        ? undefined :\r\n        array[array.length - 1];\r\n}\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/SideBar/List/List.ts?");

/***/ }),

/***/ "./src/main/app/SideBar/List/Seperator.ts":
/*!************************************************!*\
  !*** ./src/main/app/SideBar/List/Seperator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Seperator = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/SideBar/List/style.ts\");\r\nclass Seperator {\r\n    constructor() {\r\n        this.element = html_1.html.div(style_1.style.Seperator);\r\n    }\r\n}\r\nexports.Seperator = Seperator;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/SideBar/List/Seperator.ts?");

/***/ }),

/***/ "./src/main/app/SideBar/List/index.ts":
/*!********************************************!*\
  !*** ./src/main/app/SideBar/List/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.List = void 0;\r\nvar List_1 = __webpack_require__(/*! ./List */ \"./src/main/app/SideBar/List/List.ts\");\r\nObject.defineProperty(exports, \"List\", ({ enumerable: true, get: function () { return List_1.List; } }));\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/SideBar/List/index.ts?");

/***/ }),

/***/ "./src/main/app/SideBar/List/style.ts":
/*!********************************************!*\
  !*** ./src/main/app/SideBar/List/style.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.style = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nexports.style = html_1.html.style({\r\n    List: {\r\n        'user-select': 'none',\r\n    },\r\n    Seperator: {\r\n        'height': '1px',\r\n        'border-bottom': '1px dashed #0002',\r\n        'margin': '8px 0',\r\n    },\r\n    Group: {\r\n        'display': 'flex',\r\n        'flex-direction': 'row',\r\n        'border-radius': '3px',\r\n        'color': '#0006',\r\n        '& > .Text': {\r\n            'border-left': '1px solid #0001',\r\n            'padding': '4px 0 4px 16px',\r\n            // 'font-weight': '600',\r\n        },\r\n    },\r\n    Item: {\r\n        'display': 'flex',\r\n        'flex-direction': 'row',\r\n        'cursor': 'pointer',\r\n        '& > .Text': {\r\n            'padding': '4px 0 4px 16px',\r\n            'border-left': '1px solid #0001',\r\n            'flex-grow': 1,\r\n            'border-radius': '0 6px 6px 0',\r\n            ':hover': {\r\n                'background-color': '#08F1',\r\n                'color': 'blue',\r\n            },\r\n        },\r\n        '&.Active > .Text': {\r\n            'font-weight': '600',\r\n            'background-color': '#08F1',\r\n            'color': 'blue',\r\n        },\r\n    },\r\n    MemberItem: {\r\n        'display': 'none',\r\n        'flex-direction': 'row',\r\n        'cursor': 'pointer',\r\n        '& > .Text': {\r\n            'padding': '4px 0 4px 16px',\r\n            'border-left': '1px solid #0001',\r\n            'flex-grow': 1,\r\n            'border-radius': '0 6px 6px 0',\r\n            ':hover': {\r\n                'background-color': '#08F1',\r\n                'color': 'blue',\r\n            },\r\n        },\r\n        '&.Active': {\r\n            'display': 'flex',\r\n        },\r\n        '&.Active > .Text': {\r\n            'font-weight': '600',\r\n            'background-color': '#08F1',\r\n            'color': 'blue',\r\n        },\r\n    },\r\n    Indent: {},\r\n});\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/SideBar/List/style.ts?");

/***/ }),

/***/ "./src/main/app/SideBar/SideBar.ts":
/*!*****************************************!*\
  !*** ./src/main/app/SideBar/SideBar.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SideBar = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst List_1 = __webpack_require__(/*! ./List */ \"./src/main/app/SideBar/List/index.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/SideBar/style.ts\");\r\nclass SideBar {\r\n    constructor() {\r\n        var element = html_1.html.div(style_1.style.SideBar);\r\n        var list = new List_1.List();\r\n        element.append(list.element);\r\n        // init\r\n        this.element = element;\r\n        this._list = list;\r\n    }\r\n    get list() { return this._list; }\r\n}\r\nexports.SideBar = SideBar;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/SideBar/SideBar.ts?");

/***/ }),

/***/ "./src/main/app/SideBar/index.ts":
/*!***************************************!*\
  !*** ./src/main/app/SideBar/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SideBar = void 0;\r\nvar SideBar_1 = __webpack_require__(/*! ./SideBar */ \"./src/main/app/SideBar/SideBar.ts\");\r\nObject.defineProperty(exports, \"SideBar\", ({ enumerable: true, get: function () { return SideBar_1.SideBar; } }));\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/SideBar/index.ts?");

/***/ }),

/***/ "./src/main/app/SideBar/style.ts":
/*!***************************************!*\
  !*** ./src/main/app/SideBar/style.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.style = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nexports.style = html_1.html.style({\r\n    SideBar: {\r\n        'min-width': '260px',\r\n        'border-right': '1px solid #0002',\r\n        'padding-right': '10px',\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/SideBar/style.ts?");

/***/ }),

/***/ "./src/main/app/app.ts":
/*!*****************************!*\
  !*** ./src/main/app/app.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.App = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst navigation_1 = __webpack_require__(/*! modules/navigation */ \"./src/modules/navigation/index.ts\");\r\nconst Footer_1 = __webpack_require__(/*! ./Footer */ \"./src/main/app/Footer.ts\");\r\nconst Header_1 = __webpack_require__(/*! ./Header */ \"./src/main/app/Header.ts\");\r\nconst MainArea_1 = __webpack_require__(/*! ./MainArea */ \"./src/main/app/MainArea.ts\");\r\nconst PageArea_1 = __webpack_require__(/*! ./PageArea */ \"./src/main/app/PageArea/index.ts\");\r\nconst SideBar_1 = __webpack_require__(/*! ./SideBar */ \"./src/main/app/SideBar/index.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/app/style.ts\");\r\nclass App {\r\n    constructor(version) {\r\n        this.onClickItem = (path) => {\r\n            if (this._activePage.path != path) {\r\n                const page = this._navigation.get(path);\r\n                if (page != null) {\r\n                    this.loadPage(page, true);\r\n                }\r\n            }\r\n        };\r\n        this.loadCurrentPage = () => {\r\n            let hash = window.location.hash;\r\n            if (hash) {\r\n                const path = hash.substring(2);\r\n                const page = this._navigation.get(path);\r\n                if (page != null) {\r\n                    this.loadPage(page);\r\n                    return;\r\n                }\r\n            }\r\n            this.loadPage(this._navigation.homePage);\r\n        };\r\n        var element = html_1.html.div(style_1.style.App);\r\n        var header = new Header_1.Header(version);\r\n        var mainArea = new MainArea_1.MainArea();\r\n        var sideBar = new SideBar_1.SideBar();\r\n        var pageArea = new PageArea_1.PageArea();\r\n        var footer = new Footer_1.Footer();\r\n        mainArea.element.append(sideBar.element, pageArea.element);\r\n        element.append(header.element, mainArea.element, footer.element);\r\n        window.addEventListener('popstate', this.loadCurrentPage);\r\n        // init\r\n        this.element = element;\r\n        this._header = header;\r\n        this._mainArea = mainArea;\r\n        this._sideBar = sideBar;\r\n        this._pageArea = pageArea;\r\n        this._footer = footer;\r\n        this._navigation = new navigation_1.Navigation();\r\n        this._activePage = null;\r\n    }\r\n    render(pages) {\r\n        this._navigation.set(pages);\r\n        this._sideBar.list.render(pages, this.onClickItem);\r\n        this.loadCurrentPage();\r\n    }\r\n    loadPage(page, makeHistory = false) {\r\n        this._activePage = page;\r\n        this._pageArea.element.innerHTML = page.content;\r\n        this._sideBar.list.SetActive(page.path);\r\n        document.title = page.name;\r\n        window.scrollTo(0, 0);\r\n        if (makeHistory) {\r\n            window.history.pushState({ name: page.path }, '', window.location.pathname + '#/' + page.path);\r\n        }\r\n        else {\r\n            window.history.replaceState({ name: page.path }, '', window.location.pathname + '#/' + page.path);\r\n        }\r\n    }\r\n    loadContent(text) {\r\n        this._pageArea.element.innerHTML = text;\r\n    }\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/app.ts?");

/***/ }),

/***/ "./src/main/app/index.ts":
/*!*******************************!*\
  !*** ./src/main/app/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.App = void 0;\r\nvar app_1 = __webpack_require__(/*! ./app */ \"./src/main/app/app.ts\");\r\nObject.defineProperty(exports, \"App\", ({ enumerable: true, get: function () { return app_1.App; } }));\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/index.ts?");

/***/ }),

/***/ "./src/main/app/style.ts":
/*!*******************************!*\
  !*** ./src/main/app/style.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.style = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nexports.style = html_1.html.style({\r\n    App: {\r\n        'max-width': '1200px',\r\n        'margin': 'auto',\r\n    },\r\n    Header: {\r\n        'padding': '30px 0',\r\n        'user-select': 'none',\r\n    },\r\n    Title: {\r\n        'font-size': '30px',\r\n        'margin': '10px 0',\r\n        'font-weight': '500',\r\n    },\r\n    Paragraph: {\r\n        'font-size': '16px',\r\n        'font-weight': '500',\r\n        'margin': '10px 0',\r\n    },\r\n    Footer: {\r\n        'font-size': '14px',\r\n        'padding': '30px 0',\r\n        'text-align': 'center',\r\n        'color': '#0006',\r\n        'user-select': 'none',\r\n    },\r\n    MainArea: {\r\n        'display': 'flex',\r\n        'flex-direction': 'row',\r\n        'border': '1px solid #0002',\r\n        'min-height': '500px',\r\n        'border-radius': '6px',\r\n        'padding': '10px',\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/app/style.ts?");

/***/ }),

/***/ "./src/main/entry.ts":
/*!***************************!*\
  !*** ./src/main/entry.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/main/app/index.ts\");\r\nconst pages_1 = __webpack_require__(/*! pages */ \"./src/pages/index.ts\");\r\nlet app = new app_1.App('1.0.x');\r\napp.render(pages_1.pages);\r\nhtml_1.html.render(app.element);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/main/entry.ts?");

/***/ }),

/***/ "./src/modules/code-area/CodeParser.ts":
/*!*********************************************!*\
  !*** ./src/modules/code-area/CodeParser.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CodeParser = void 0;\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/modules/code-area/style.ts\");\r\nexports.CodeParser = {\r\n    Parse(text) {\r\n        text = text.trim();\r\n        let cursor = 0;\r\n        const length = text.length;\r\n        const tokens = [];\r\n        let result;\r\n        while (cursor < length) {\r\n            whitespaces.lastIndex = cursor;\r\n            result = whitespaces.exec(text);\r\n            if (result) {\r\n                const value = result[0];\r\n                tokens.push(value);\r\n                cursor += value.length;\r\n                continue;\r\n            }\r\n            comment.lastIndex = cursor;\r\n            result = comment.exec(text);\r\n            if (result) {\r\n                const value = result[0];\r\n                tokens.push(Span(value, style_1.style.Comment));\r\n                cursor += value.length;\r\n                continue;\r\n            }\r\n            keywords.lastIndex = cursor;\r\n            result = keywords.exec(text);\r\n            if (result) {\r\n                const value = result[0];\r\n                tokens.push(Span(value, style_1.style.Keyword));\r\n                cursor += value.length;\r\n                continue;\r\n            }\r\n            numbers.lastIndex = cursor;\r\n            result = numbers.exec(text);\r\n            if (result) {\r\n                const value = result[0];\r\n                tokens.push(Span(value, style_1.style.Number));\r\n                cursor += value.length;\r\n                continue;\r\n            }\r\n            line.lastIndex = cursor;\r\n            result = line.exec(text);\r\n            if (result) {\r\n                const value = result[0];\r\n                tokens.push(Div(\"\", style_1.style.HorizontalLine));\r\n                cursor += value.length;\r\n                continue;\r\n            }\r\n            symbols.lastIndex = cursor;\r\n            result = symbols.exec(text);\r\n            if (result) {\r\n                const value = result[0];\r\n                tokens.push(Span(value, style_1.style.Symbol));\r\n                cursor += value.length;\r\n                continue;\r\n            }\r\n            strings.lastIndex = cursor;\r\n            result = strings.exec(text);\r\n            if (result) {\r\n                const value = result[0];\r\n                tokens.push(Span(value, style_1.style.String));\r\n                cursor += value.length;\r\n                continue;\r\n            }\r\n            types.lastIndex = cursor;\r\n            result = types.exec(text);\r\n            if (result) {\r\n                const value = result[0];\r\n                tokens.push(Span(value, style_1.style.Type));\r\n                cursor += value.length;\r\n                continue;\r\n            }\r\n            identifiers.lastIndex = cursor;\r\n            result = identifiers.exec(text);\r\n            if (result) {\r\n                const value = result[0];\r\n                tokens.push(Span(value, style_1.style.Identifier));\r\n                cursor += value.length;\r\n                continue;\r\n            }\r\n            return null;\r\n        }\r\n        return tokens.join('');\r\n    }\r\n};\r\nfunction Span(text, className) {\r\n    return `<span class=\"${className}\">${text}</span>`;\r\n}\r\nfunction Div(text, className) {\r\n    return `<div class=\"${className}\">${text}</div>`;\r\n}\r\nconst comment = /\\/\\/.*/y;\r\nconst strings = /\"([^\"]+|\\\\\")*\"/y;\r\nconst keywords = /\\b(get|set|true|false|var|new|interface|typeof|out|ref|in|this|using|private|protected|public|internal|namespace|class|struct|enum|delegate|void|sbyte|byte|short|ushort|int|uint|long|ulong|float|double|string|params|object|event|static|operator|bool|return|if|for|foreach)\\b/y;\r\nconst types = /\\b(SoundEffects|IDisposable|Vector2|Vector3|Vector4|IConfig|AudioMixerGroup|Color|Object|eGUI|e|AudioPlayer|List|T|GameEvents|Attribute|EasyInspectorAttribute|EasyInspector|EasyBehaviour|FontStyle|MonoBehaviour|Player|AudioClip|Action|Transform|Func|Time|IEnumerable)\\b(?!\\()/y;\r\nconst identifiers = /[a-zA-Z_][a-zA-Z0-9_]*/y;\r\nconst whitespaces = /\\s+/y;\r\nconst symbols = /[{}[\\]+=\\*\\\\/%<>.,()!&|;:-]/y;\r\nconst numbers = /-?[0-9][0-9]*[fFuUlL]?/y;\r\nconst line = /---\\s*\\r?\\n/y;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/code-area/CodeParser.ts?");

/***/ }),

/***/ "./src/modules/code-area/index.ts":
/*!****************************************!*\
  !*** ./src/modules/code-area/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CodeParser = void 0;\r\nvar CodeParser_1 = __webpack_require__(/*! ./CodeParser */ \"./src/modules/code-area/CodeParser.ts\");\r\nObject.defineProperty(exports, \"CodeParser\", ({ enumerable: true, get: function () { return CodeParser_1.CodeParser; } }));\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/code-area/index.ts?");

/***/ }),

/***/ "./src/modules/code-area/style.ts":
/*!****************************************!*\
  !*** ./src/modules/code-area/style.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.style = void 0;\r\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\r\nexports.style = html_1.html.style({\r\n    Keyword: {\r\n        'color': 'blue'\r\n    },\r\n    Number: {\r\n        'color': '#9933cc'\r\n    },\r\n    String: {\r\n        'color': '#bf4055'\r\n    },\r\n    HorizontalLine: {\r\n        'background-color': '#00000014',\r\n        'margin': '20px 0',\r\n        'height': '1px',\r\n    },\r\n    Symbol: {\r\n        'color': '#0008'\r\n    },\r\n    Type: {\r\n        'color': '#2999a3'\r\n    },\r\n    Comment: {\r\n        'color': '#47855caa'\r\n    },\r\n    Identifier: {\r\n        color: '#000'\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/code-area/style.ts?");

/***/ }),

/***/ "./src/modules/html/html.ts":
/*!**********************************!*\
  !*** ./src/modules/html/html.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.html = void 0;\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/modules/html/style.ts\");\r\nfunction CreateElement(key, className) {\r\n    var element = document.createElement(key);\r\n    element.className = className;\r\n    return element;\r\n}\r\nexports.html = {\r\n    div(className) {\r\n        return CreateElement('div', className);\r\n    },\r\n    h1(className) {\r\n        return CreateElement('h1', className);\r\n    },\r\n    p(className) {\r\n        return CreateElement('p', className);\r\n    },\r\n    style: style_1.createStyle,\r\n    render(content) {\r\n        document.body.appendChild(content);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/html/html.ts?");

/***/ }),

/***/ "./src/modules/html/index.ts":
/*!***********************************!*\
  !*** ./src/modules/html/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.html = void 0;\r\nvar html_1 = __webpack_require__(/*! ./html */ \"./src/modules/html/html.ts\");\r\nObject.defineProperty(exports, \"html\", ({ enumerable: true, get: function () { return html_1.html; } }));\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/html/index.ts?");

/***/ }),

/***/ "./src/modules/html/style.ts":
/*!***********************************!*\
  !*** ./src/modules/html/style.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createStyle = void 0;\r\nconst styleTag = document.createElement('style');\r\ndocument.head.append(styleTag);\r\nconst styleSheet = styleTag.sheet;\r\nlet uniqueId = 0;\r\nfunction createStyle(config) {\r\n    let classes = {};\r\n    for (const key in config) {\r\n        const selector = key + '-' + (uniqueId++);\r\n        addRule(selector, config[key]);\r\n        classes[key] = selector;\r\n    }\r\n    return classes;\r\n}\r\nexports.createStyle = createStyle;\r\nfunction addRule(selector, obj) {\r\n    var properties = [];\r\n    for (const key in obj) {\r\n        if (key.startsWith(':')) {\r\n            addRule(`${selector}${key}`, obj[key]);\r\n        }\r\n        else if (key.startsWith('&')) {\r\n            addRule(`${selector}${key.substring(1)}`, obj[key]);\r\n        }\r\n        else {\r\n            properties.push(createProperty(key, obj[key]));\r\n        }\r\n    }\r\n    var rule = createRule(selector, properties);\r\n    styleSheet.insertRule(rule);\r\n}\r\nfunction createProperty(key, value) {\r\n    return `${key}: ${value};`;\r\n}\r\nfunction createRule(key, styles) {\r\n    return `.${key} {${styles.join('')}}`;\r\n}\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/html/style.ts?");

/***/ }),

/***/ "./src/modules/navigation/Navigation.ts":
/*!**********************************************!*\
  !*** ./src/modules/navigation/Navigation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Navigation = void 0;\r\nclass Navigation {\r\n    constructor() {\r\n        this._pages = new Map();\r\n    }\r\n    get homePage() {\r\n        return this._pages.values().next().value;\r\n    }\r\n    has(path) {\r\n        return this._pages.has(path);\r\n    }\r\n    get(path) {\r\n        return this._pages.get(path);\r\n    }\r\n    set(pages) {\r\n        for (const page of pages) {\r\n            this._pages.set(page.path, page);\r\n        }\r\n    }\r\n}\r\nexports.Navigation = Navigation;\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/navigation/Navigation.ts?");

/***/ }),

/***/ "./src/modules/navigation/index.ts":
/*!*****************************************!*\
  !*** ./src/modules/navigation/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Navigation = void 0;\r\nvar Navigation_1 = __webpack_require__(/*! ./Navigation */ \"./src/modules/navigation/Navigation.ts\");\r\nObject.defineProperty(exports, \"Navigation\", ({ enumerable: true, get: function () { return Navigation_1.Navigation; } }));\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/navigation/index.ts?");

/***/ }),

/***/ "./src/modules/page/Page.ts":
/*!**********************************!*\
  !*** ./src/modules/page/Page.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Page = void 0;\r\nconst code_area_1 = __webpack_require__(/*! modules/code-area */ \"./src/modules/code-area/index.ts\");\r\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/modules/page/style.ts\");\r\nclass Page {\r\n    constructor(path, name) {\r\n        this.MemberElement = (member) => {\r\n            var text = [\r\n                Element('div', style_1.style.MemberValue, member.value),\r\n                Element('div', style_1.style.Description, member.summery),\r\n            ].join('');\r\n            return Link(style_1.style.MemberItem, this._path + '/' + member.value, text);\r\n        };\r\n        const segments = path.split('/');\r\n        if (!name) {\r\n            name = segments[segments.length - 1];\r\n        }\r\n        // init\r\n        this._segments = segments;\r\n        this._path = path;\r\n        this._name = name;\r\n        this._contents = [];\r\n    }\r\n    get isMember() { return this._isMember; }\r\n    get path() { return this._path; }\r\n    get content() { return Div(style_1.style.Page, this._contents.join('')); }\r\n    get name() { return this._name; }\r\n    get depth() { return this._segments.length; }\r\n    get segments() { return this._segments; }\r\n    setAsMember() {\r\n        this._isMember = true;\r\n    }\r\n    h1(text) {\r\n        this._contents.push(H1(style_1.style.H1, text));\r\n    }\r\n    h2(text) {\r\n        this._contents.push(H2(style_1.style.H2, text));\r\n    }\r\n    h3(text) {\r\n        this._contents.push(H3(style_1.style.H3, text));\r\n    }\r\n    p(text) {\r\n        this._contents.push(Div(style_1.style.Paragraph, ParseText(text)));\r\n    }\r\n    ul(array) {\r\n        var text = array.map(item => Element('li', style_1.style.ListItem, ParseText(item))).join('');\r\n        this._contents.push(Element('ul', style_1.style.List, text));\r\n    }\r\n    br() {\r\n        this._contents.push('<br/>');\r\n    }\r\n    code(text, type = 'cs') {\r\n        let code = code_area_1.CodeParser.Parse(text);\r\n        this._contents.push(Div(style_1.style.Code, code));\r\n    }\r\n    memberList(...members) {\r\n        let text = Div(style_1.style.MemberList, members.map(this.MemberElement).join(''));\r\n        this._contents.push(text);\r\n    }\r\n    note(text) {\r\n        this._contents.push(Div(style_1.style.Note, ParseText(text)));\r\n    }\r\n    warning(text) {\r\n        this._contents.push(Div(style_1.style.Warning, ParseText(text)));\r\n    }\r\n}\r\nexports.Page = Page;\r\nconst paragraphPattern = /\\{(.+?)}/g;\r\nconst boldPattern = /\\*\\*(.+?)\\*\\*/g;\r\nfunction ParseText(text) {\r\n    text = text.replace(paragraphPattern, '<span class=\"Code\">$1</span>');\r\n    return text.replace(boldPattern, `<span class=\"${style_1.style.Bold}\">$1</span>`);\r\n}\r\nfunction Div(className, text) {\r\n    return Element('div', className, text);\r\n}\r\nfunction H1(className, text) {\r\n    return Element('h1', className, text);\r\n}\r\nfunction H2(className, text) {\r\n    return Element('h2', className, text);\r\n}\r\nfunction H3(className, text) {\r\n    return Element('h3', className, text);\r\n}\r\nfunction Element(tagName, className, text) {\r\n    return `<${tagName} class=\"${className}\">${text}</${tagName}>`;\r\n}\r\nfunction Link(className, href, text) {\r\n    return `<a class=\"${className}\" href=\"./index.html#/${href}\">${text}</a>`;\r\n}\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/page/Page.ts?");

/***/ }),

/***/ "./src/modules/page/index.ts":
/*!***********************************!*\
  !*** ./src/modules/page/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Page = void 0;\r\nvar Page_1 = __webpack_require__(/*! ./Page */ \"./src/modules/page/Page.ts\");\r\nObject.defineProperty(exports, \"Page\", ({ enumerable: true, get: function () { return Page_1.Page; } }));\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/page/index.ts?");

/***/ }),

/***/ "./src/modules/page/style.ts":
/*!***********************************!*\
  !*** ./src/modules/page/style.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.style = void 0;\r\nconst style_1 = __webpack_require__(/*! modules/html/style */ \"./src/modules/html/style.ts\");\r\nexports.style = (0, style_1.createStyle)({\r\n    Page: {\r\n        'padding': '20px',\r\n        '& > .Page-Code-text': {\r\n            'background-color': '#f4f7fb',\r\n            'border-radius': '6px',\r\n            'padding': '20px',\r\n            'margin': '20px 0',\r\n        },\r\n    },\r\n    H1: {\r\n        'font-size': '30px',\r\n        'margin': '0 0 20px 0',\r\n        'font-weight': 600,\r\n    },\r\n    H2: {\r\n        'font-size': '24px',\r\n        'margin': '34px 0 20px 0',\r\n        'font-weight': 600,\r\n    },\r\n    H3: {\r\n        'font-size': '20px',\r\n        'margin': '34px 0 20px 0',\r\n        'font-weight': 600,\r\n    },\r\n    Paragraph: {\r\n        \"font-size\": '16px',\r\n        'margin': '20px 0',\r\n        'line-height': '1.8',\r\n        '& .Code': {\r\n            'background-color': '#f4f7fb',\r\n            'border-radius': '6px',\r\n            'padding': '3px 6px',\r\n            'margin': '0 1px',\r\n            'font-family': \"Roboto Mono, monospace\",\r\n            'font-size': '14px',\r\n        },\r\n    },\r\n    List: {\r\n        'margin': '20px 0',\r\n        'padding-left': '30px',\r\n        'line-height': 1.8,\r\n        'list-style': 'initial',\r\n    },\r\n    ListItem: {},\r\n    Code: {\r\n        \"font-size\": '14px',\r\n        'background-color': '#f4f7fb',\r\n        'border-radius': '6px',\r\n        'padding': '20px',\r\n        'margin': '20px 0',\r\n        'font-family': \"Roboto Mono, monospace\",\r\n        'white-space': 'pre',\r\n        'line-height': 1.8,\r\n    },\r\n    Bold: {\r\n        'font-weight': 600\r\n    },\r\n    Note: {\r\n        'background-color': 'hsl(210deg 100% 97%)',\r\n        'color': 'hsl(210deg 100% 40%)',\r\n        'margin': '20px 0px',\r\n        'padding': '20px',\r\n        'border-radius': '0 6px 6px 0',\r\n        'border-left': '4px solid',\r\n        'line-height': '1.8',\r\n        '::before': {\r\n            'content': \"'Note:'\",\r\n            'margin-right': '10px',\r\n            'font-weight': 600,\r\n        }\r\n    },\r\n    Warning: {\r\n        'background-color': 'hsl(50deg 60% 95%)',\r\n        'color': 'hsl(40deg 100% 35%)',\r\n        'margin': '20px 0px',\r\n        'padding': '20px',\r\n        'border-radius': '0 6px 6px 0',\r\n        'border-left': '4px solid',\r\n        'line-height': '1.8',\r\n        '::before': {\r\n            'content': \"'Warning:'\",\r\n            'margin-right': '10px',\r\n            'font-weight': 600,\r\n        }\r\n    },\r\n    MemberList: {\r\n        'margin': '20px 0',\r\n        'background-color': '#f4f7fb',\r\n        'border-radius': '6px',\r\n        'overflow': 'hidden',\r\n    },\r\n    MemberItem: {\r\n        'cursor': 'pointer',\r\n        'display': 'flex',\r\n        'flex-direction': 'row',\r\n        'align-items': 'center',\r\n        'padding': '14px 0',\r\n        'user-select': \"none\",\r\n        \"font-size\": '14px',\r\n        \"color\": \"black\",\r\n        ':not(:last-child)': {\r\n            'border-bottom': '1px solid hsl(214deg 40% 90%)',\r\n        },\r\n        ':hover': {\r\n            \"background-color\": 'hsl(214deg 50% 95%)',\r\n            '& > :first-child': {\r\n                \"text-decoration\": 'underline',\r\n            },\r\n        },\r\n        ':active': {\r\n            \"color\": \"black\",\r\n            \"background-color\": 'hsl(214deg 50% 90%) !important',\r\n        }\r\n    },\r\n    MemberValue: {\r\n        'font-family': 'Roboto Mono, monospace',\r\n        'min-width': '140px',\r\n        'padding': '6px 20px',\r\n        'color': 'blueviolet',\r\n    },\r\n    Description: {\r\n        'border-left': '1px solid #dbe4f0',\r\n        'padding': '6px 20px',\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/modules/page/style.ts?");

/***/ }),

/***/ "./src/pages/About/QuickStart.ts":
/*!***************************************!*\
  !*** ./src/pages/About/QuickStart.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page(\"About/QuickStart\", 'Quick Start');\r\nexports.page.h1('Welcome');\r\nexports.page.p(`\r\n    Easy Toolset is a simple and powerful tool that you can use on your every unity project.\r\n`);\r\nexports.page.p(`\r\n    Here's the short list of the tools that you get from the Easy Toolset:\r\n`);\r\nexports.page.ul([\r\n    '**AudioPlayer** : Easily play 2D audio in the your game.',\r\n    '**GameEvents** : A scene independant event system.',\r\n    '**Inspector** : Easily create a custom and powerful editor for your objects.',\r\n    '**Math & Random** : List of useful math and random value generator methods.',\r\n    '**Timer** : Easily invoke a method after a delay or intervals',\r\n]);\r\nexports.page.br();\r\nexports.page.br();\r\nexports.page.h1('Quick Start (Game Tools)');\r\nexports.page.p('Add the {namespace} to your script:');\r\nexports.page.code('using EasyToolset;');\r\nexports.page.p('Use {e.[shortcuts]}:');\r\nexports.page.code(`\r\n// play an AudioClip\r\ne.Play(audioClip);\r\n\r\n// convert degree to radian\r\nvar radianValue = e.Radian(180);\r\n\r\n// get sine value of an angle\r\nvar sinValue = e.Sin(radianValue);\r\n\r\n// listen to an event\r\ne.On(\"GameOver\", OnGameOver);\r\n\r\n// Generate a random float value\r\nvar floatValue = e.RandomFloat(0, 100);\r\n\r\n// Invoke a method after a delay\r\ne.SetTimeout(OnGameOver, 30);\r\n`);\r\nexports.page.br();\r\nexports.page.br();\r\nexports.page.h1('Quick Start (Inspector)');\r\nexports.page.p('Add the {namespace} to your script:');\r\nexports.page.code('using EasyToolset;');\r\nexports.page.p('Use {eGUI.[commands]}:');\r\nexports.page.code(`\r\n[EasyInspector(\"OnInspector\", true)]\r\npublic class Player : MonoBehaviour\r\n{\r\n    public float health;\r\n    public float energy;\r\n\r\n    public bool IsAlive {\r\n        get => health > 0;\r\n    }\r\n\r\n    private void FillHealthAndEnergy()\r\n    {\r\n        health = 100;\r\n        energy = 100;\r\n    }\r\n\r\n    private static void OnInspector()\r\n    {\r\n        eGUI.Slider(\"health\", 0, 100);\r\n        eGUI.Slider(\"energy\", 0, 100);\r\n        \r\n        eGUI.ProgressBar(\"health\", 0, 100);\r\n\r\n        using(eGUI.Enable(\"IsAlive\"))\r\n        {\r\n            eGUI.Button(\"FillHealthAndEnergy\");\r\n        }\r\n    }\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/About/QuickStart.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset.ts":
/*!**********************************!*\
  !*** ./src/pages/EasyToolset.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset');\r\nexports.page.h1('EasyToolset');\r\nexports.page.p(`\r\n    The main namespace of the plugin.\r\n`);\r\nexports.page.code(`\r\n    namespace EasyToolset {...}\r\n`);\r\nexports.page.h3('Members');\r\nexports.page.memberList({ value: 'AudioPlayer', summery: 'A service to play AudioClip in 2D space.' }, { value: 'e', summery: \"The shortcuts magic class\" }, { value: 'eGUI', summery: \"The Editor's magic class.\" }, { value: 'EasyBehaviour', summery: \"An empty alternative class, drives from MonoBehaviour\" }, { value: 'EasyInspectorAttribute', summery: \"An attribute that define the easy inspector method of the Object.\" }, { value: 'GameEvents', summery: \"A global access easy to use event system.\" }, { value: 'Editor', summery: \"A nested namespace that contains all the editor classes and types related to Easy Editor & Inspector.\" });\r\nexports.page.h3('Examples');\r\nexports.page.code(`\r\nusing EasyToolset;\r\n\r\npublic class Map : MonoBehaviour\r\n{\r\n    public AudioClip[] greetingSounds;\r\n\r\n    private void Start()\r\n    {\r\n        e.Play(e.RandomElement(greetingSounds));\r\n    }\r\n\r\n    // rest...\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/AudioPlayer.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/AudioPlayer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/AudioPlayer');\r\nexports.page.h1('AudioPlayer');\r\nexports.page.p(`\r\n    {AudioPlayer} is a tool to play sounds in 2D space.\r\n`);\r\nexports.page.code(`\r\nnamespace EasyToolset\r\n{\r\n    public static class AudioPlayer {...}\r\n}\r\n`);\r\nexports.page.h3('Members');\r\nexports.page.memberList({ value: 'volume', summery: 'Volume of the audio-player.' }, { value: 'mute', summery: 'Mute state of the audio-player.' }, { value: 'output', summery: 'Output mixer of the audio-player.' }, { value: 'Play', summery: 'Plays an AudioClip via audio-player.' }, { value: 'Stop', summery: 'Stops all the clips that playing by the audio-player.' }, { value: 'ToggleMute', summery: \"Toggles audio-player's mute state.\" });\r\nexports.page.h3('Examples');\r\nexports.page.code(`\r\nusing EasyToolset;\r\n\r\npublic class Tank : MonoBehaviour\r\n{\r\n    public AudioClip levelUpSound;\r\n    public AudioClip fireSound;\r\n\r\n    private void OnLevelUp()\r\n    {\r\n        AudioPlayer.Play(levelUpSound);\r\n    }\r\n\r\n    private void OnFire()\r\n    {\r\n        AudioPlayer.Play(fireSound, e.RandomFloat(0.8f, 1f));\r\n    }\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/AudioPlayer.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/AudioPlayer/Play.ts":
/*!***************************************************!*\
  !*** ./src/pages/EasyToolset/AudioPlayer/Play.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/AudioPlayer/Play');\r\nexports.page.setAsMember();\r\nexports.page.h1('AudioPlayer.Play');\r\nexports.page.p(`\r\n    Use this method to play 2D sounds in your game.\r\n`);\r\nexports.page.code(`\r\nvoid Play(AudioClip clip)\r\n---\r\nvoid Play(AudioClip clip, float volume)\r\n`);\r\nexports.page.h3('Examples');\r\nexports.page.code(`\r\n// SoundEffects.cs\r\n\r\nusing EasyToolset;\r\nusing System.Collections.Generic;\r\nusing System.Linq;\r\nusing UnityEngine;\r\n\r\npublic class SoundEffects : MonoBehaviour\r\n{\r\n    public static SoundEffects Instance { get; private set; }\r\n\r\n    public AudioClip[] clips;\r\n    private Dictionary<string, AudioClip> map;\r\n\r\n    private void Start()\r\n    {\r\n        Instance = this;\r\n        DontDestroyOnLoad(gameObject);\r\n\r\n        map = clips.ToDictionary(clip => clip.name);\r\n    }\r\n\r\n    public void Play(string clipName)\r\n    {\r\n        if (map.TryGetValue(clipName, out var clip))\r\n        {\r\n            AudioPlayer.Play(clip);\r\n        }\r\n    }\r\n}\r\n`);\r\nexports.page.code(`\r\n// MenuPanel.cs\r\n\r\npublic class MenuPanel : MonoBehaviour\r\n{\r\n    \r\n    public void OnClickPause()\r\n    {\r\n        // plays an AudioClip with name 'Pause-Sound'\r\n        SoundEffects.Instance.Play(\"Pause-Sound\");\r\n    }\r\n\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/AudioPlayer/Play.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/AudioPlayer/Stop.ts":
/*!***************************************************!*\
  !*** ./src/pages/EasyToolset/AudioPlayer/Stop.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/AudioPlayer/Stop');\r\nexports.page.setAsMember();\r\nexports.page.h1('AudioPlayer.Play');\r\nexports.page.p(`\r\n    Use this method to stop all the playing clips via {AudioPlayer}.\r\n`);\r\nexports.page.code(`\r\nvoid Stop()\r\n`);\r\nexports.page.note(`\r\nAudioPlayer won't stop playing any clip when scene changes.\r\n`);\r\nexports.page.h3('Examples');\r\nexports.page.code(`\r\nusing EasyToolset;\r\nusing UnityEngine;\r\n\r\npublic class GameManager : MonoBehaviour\r\n{\r\n    public void OnSceneChanged()\r\n    {\r\n        AudioPlayer.Stop();\r\n    }\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/AudioPlayer/Stop.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/AudioPlayer/ToggleMute.ts":
/*!*********************************************************!*\
  !*** ./src/pages/EasyToolset/AudioPlayer/ToggleMute.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/AudioPlayer/ToggleMute');\r\nexports.page.setAsMember();\r\nexports.page.h1('AudioPlayer.ToggleMute');\r\nexports.page.p(`\r\n    Toggles the mute property of {AudioPlayer}.\r\n`);\r\nexports.page.code(`\r\nbool ToggleMute()\r\n`);\r\nexports.page.h3('Examples');\r\nexports.page.code(`\r\nusing EasyToolset;\r\nusing UnityEngine;\r\nusing UnityEngine.UI;\r\n\r\npublic class SettingPanel : MonoBehaviour\r\n{\r\n    public Toggle muteToggle;\r\n\r\n    public void OnMuteButtonClicked()\r\n    {\r\n        muteToggle.isOn = AudioPlayer.ToggleMute();\r\n    }\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/AudioPlayer/ToggleMute.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/AudioPlayer/mute.ts":
/*!***************************************************!*\
  !*** ./src/pages/EasyToolset/AudioPlayer/mute.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/AudioPlayer/mute');\r\nexports.page.setAsMember();\r\nexports.page.h1('AudioPlayer.mute');\r\nexports.page.p(`\r\n    If set it to {true} it will mutes the AudioPlayer.\r\n`);\r\nexports.page.code(`\r\nbool mute { get; set; }\r\n`);\r\nexports.page.h3('Examples');\r\nexports.page.code(`\r\nusing EasyToolset;\r\nusing UnityEngine;\r\n\r\npublic class SettingPanel : MonoBehaviour\r\n{\r\n    public void OnMuteAudio(bool mute)\r\n    {\r\n        AudioPlayer.mute = mute;\r\n    }\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/AudioPlayer/mute.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/AudioPlayer/output.ts":
/*!*****************************************************!*\
  !*** ./src/pages/EasyToolset/AudioPlayer/output.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/AudioPlayer/output');\r\nexports.page.setAsMember();\r\nexports.page.h1('AudioPlayer.output');\r\nexports.page.p(`\r\n    Sets the target mixer group of the AudioPlayer.\r\n`);\r\nexports.page.code(`\r\nAudioMixerGroup output { get; set; }\r\n`);\r\nexports.page.h3('Examples');\r\nexports.page.code(`\r\nusing EasyToolset;\r\nusing UnityEngine;\r\nusing UnityEngine.Audio;\r\n\r\npublic class GameManager : MonoBehaviour\r\n{\r\n    public AudioMixerGroup audioPlayerGroup;\r\n\r\n    private void Awake()\r\n    {\r\n        AudioPlayer.output = audioPlayerGroup;\r\n    }\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/AudioPlayer/output.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/AudioPlayer/volume.ts":
/*!*****************************************************!*\
  !*** ./src/pages/EasyToolset/AudioPlayer/volume.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/AudioPlayer/volume');\r\nexports.page.setAsMember();\r\nexports.page.h1('AudioPlayer.volume');\r\nexports.page.p(`\r\n    Master volume of the AudioPlayer.\r\n`);\r\nexports.page.code(`\r\nfloat volume { get; set; }\r\n`);\r\nexports.page.h3('Examples');\r\nexports.page.code(`\r\nusing EasyToolset;\r\n\r\npublic class SettingPanel : MonoBehaviour\r\n{\r\n    public void OnVolumeChange(float volume)\r\n    {\r\n        AudioPlayer.volume = volume;\r\n    }\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/AudioPlayer/volume.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/EasyBehaviour.ts":
/*!************************************************!*\
  !*** ./src/pages/EasyToolset/EasyBehaviour.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/EasyBehaviour');\r\nexports.page.h1('EasyBehaviour');\r\nexports.page.p(`\r\n    An empty class that directly drive from the {MonoBehaviour} and can have Easy Inspector.\r\n`);\r\nexports.page.code(`\r\nnamespace EasyToolset\r\n{\r\n    public class EasyBehaviour : MonoBehaviour { }\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/EasyBehaviour.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/EasyInspectorAttribute.ts":
/*!*********************************************************!*\
  !*** ./src/pages/EasyToolset/EasyInspectorAttribute.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/EasyInspectorAttribute');\r\nexports.page.h1('EasyInspectorAttribute');\r\nexports.page.p(`\r\nEasy toolset need this attribute on top of {MonoBehaviour} and {ScriptableObject} classes to find the inspector method.\r\n`);\r\nexports.page.code(`\r\nnamespace EasyToolset\r\n{\r\n    public class EasyInspectorAttribute : Attribute {...}\r\n}\r\n`);\r\nexports.page.h3(`Members`);\r\nexports.page.memberList({ value: 'EasyInspectorAttribute', summery: \"Constructor - Creates new instance of EasyInspectorAttribute class.\" }, { value: 'methodName', summery: \"Name of the Editor method.\" }, { value: 'canEditMultipleObjects', summery: \"Can editor edit multiple Objects.\" });\r\nexports.page.h3(`Examples`);\r\nexports.page.code(`\r\n[EasyInspector(\"Editor\", true)]\r\npublic class Player : MonoBehaviour\r\n{\r\n    public float health;\r\n    public float energy;\r\n\r\n    private static void Editor()\r\n    {\r\n        eGUI.Slider(\"health\", 0, 100);\r\n        eGUI.ProgressBar(\"health\", 0, 100);\r\n\r\n        eGUI.Slider(\"energy\", 0, 100);\r\n        eGUI.ProgressBar(\"energy\", 0, 100);\r\n    }\r\n}\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/EasyInspectorAttribute.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/EasyInspectorAttribute/EasyInspectorAttribute.ts":
/*!********************************************************************************!*\
  !*** ./src/pages/EasyToolset/EasyInspectorAttribute/EasyInspectorAttribute.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/EasyInspectorAttribute/EasyInspectorAttribute');\r\nexports.page.setAsMember();\r\nexports.page.h1('EasyInspectorAttribute');\r\nexports.page.p(`\r\nCreates new instance of EasyInspectorAttribute class.\r\n`);\r\nexports.page.code(`\r\npublic EasyInspectorAttribute(string methodName, bool canEditMultipleObjects = true)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/EasyInspectorAttribute/EasyInspectorAttribute.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/EasyInspectorAttribute/canEditMultipleObjects.ts":
/*!********************************************************************************!*\
  !*** ./src/pages/EasyToolset/EasyInspectorAttribute/canEditMultipleObjects.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/EasyInspectorAttribute/canEditMultipleObjects');\r\nexports.page.setAsMember();\r\nexports.page.h1('canEditMultipleObjects');\r\nexports.page.p(`\r\nCan editor edit multiple objects.\r\n`);\r\nexports.page.code(`\r\nbool canEditMultipleObjects { get; }\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/EasyInspectorAttribute/canEditMultipleObjects.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/EasyInspectorAttribute/methodName.ts":
/*!********************************************************************!*\
  !*** ./src/pages/EasyToolset/EasyInspectorAttribute/methodName.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/EasyInspectorAttribute/methodName');\r\nexports.page.setAsMember();\r\nexports.page.h1('methodName');\r\nexports.page.p(`\r\nName of the editor method.\r\n`);\r\nexports.page.code(`\r\nstring methodName { get; }\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/EasyInspectorAttribute/methodName.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig.ts":
/*!*************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig');\r\nexports.page.h1('IConfig');\r\nexports.page.p(`\r\nWith help of this interface, you can customize the drawer.\r\n`);\r\nexports.page.code(`\r\nnamespace EasyToolset.Editor\r\n{\r\n    public interface IConfig {...}\r\n}\r\n`);\r\nexports.page.note(`\r\nDepends on the property type and the drawer, some configuration properties\r\nmay not have any effect. <br/>\r\nFor Example: 'RichText' has no effect on 'Int' drawer or 'Min' and 'Max' doesn't work on Text drawer.\r\n`);\r\nexports.page.h3(\"Members\");\r\nexports.page.memberList({ value: 'Label', summery: \"Sets the label of the controller.\" }, { value: 'EmptyLabel', summery: \"Sets the label of the controller to whitespace.\" }, { value: 'RemoveLabel', summery: \"Removes prefix of the drawer.\" }, { value: 'Tooltip', summery: \"Sets tooltip of a controller.\" });\r\nexports.page.memberList({ value: 'Wide', summery: \"Draws the controller in wide mode.\" }, { value: 'LabelWidth', summery: \"Sets the label width of the controller.\" }, { value: 'LayoutOptions', summery: \"Adds some GUILayoutOptions to the controller.\" });\r\nexports.page.memberList({ value: 'Bold', summery: \"Sets font style of the drawer to be bold.\" }, { value: 'Italic', summery: \"Sets font style of the drawer to be italic.\" }, { value: 'FontStyle', summery: \"Sets the font style of the drawer.\" }, { value: 'RichText', summery: \"Adds support for rich text in content of the drawer.\" });\r\nexports.page.memberList({ value: 'Show', summery: \"Shows the drawer if value of the property be true.\" }, { value: 'Hide', summery: \"Hides the drawer if value of the property be true.\" }, { value: 'Enable', summery: \"Enables the drawer if value of the property be true.\" }, { value: 'Disable', summery: \"Disables the drawer if value of the property be true.\" });\r\nexports.page.memberList({ value: 'HideScriptReference', summery: \"Hides the script reference in eGUI.DefaultInspector().\" }, { value: 'Exclude', summery: \"Excludes properties that drawn by the eGUI.DefaultInspector().\" });\r\nexports.page.memberList({ value: 'OnChange', summery: \"Inputs will call the OnChange method after each time the property value is changed.\" });\r\nexports.page.memberList({ value: 'Readonly', summery: \"Disables the controller.\" }, { value: 'AllowEdit', summery: \"Lets non-serialized editable properties to be edited in the editor.\" });\r\nexports.page.memberList({ value: 'Min', summery: \"Sets minimum value for the number input.\" }, { value: 'Max', summery: \"Sets maximum value for the number input.\" }, { value: 'Range', summery: \"Sets the range of the value for the number input.\" });\r\nexports.page.memberList({ value: 'Delayed', summery: \"Uses the delayed version of the input. (only for eGUI.Int(), eGUI.Float(), eGUI.Double() and eGUI.Text())\" });\r\nexports.page.memberList({ value: 'AssetOnly', summery: \"Forces the object picker to only allow picking assets.\" });\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/AllowEdit.ts":
/*!***********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/AllowEdit.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/AllowEdit');\r\nexports.page.setAsMember();\r\nexports.page.h1('AllowEdit');\r\nexports.page.p(`\r\nAllows the non-serialized editable properties to edited in the editor.\r\n`);\r\nexports.page.code(`\r\nIConfig AllowEdit()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/AllowEdit.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/AssetOnly.ts":
/*!***********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/AssetOnly.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/AssetOnly');\r\nexports.page.setAsMember();\r\nexports.page.h1('AssetOnly');\r\nexports.page.p(`\r\nForces the object picker to only allow asset objects.\r\n`);\r\nexports.page.code(`\r\nIConfig AssetOnly()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/AssetOnly.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Bold.ts":
/*!******************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Bold.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Bold');\r\nexports.page.setAsMember();\r\nexports.page.h1('Bold');\r\nexports.page.p(`\r\nMakes the content of the drawer, bold.\r\n`);\r\nexports.page.code(`\r\nIConfig Bold()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Bold.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Delayed.ts":
/*!*********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Delayed.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Delayed');\r\nexports.page.setAsMember();\r\nexports.page.h1('Delayed');\r\nexports.page.p(`\r\nUses the delayed drawer for the input. (only works on Int, Float, Double and Text drawers)\r\n`);\r\nexports.page.code(`\r\nIConfig Delayed()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Delayed.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Disable.ts":
/*!*********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Disable.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Disable');\r\nexports.page.setAsMember();\r\nexports.page.h1('Disable');\r\nexports.page.p(`\r\nIf property value be true, the drawer will be disabled.\r\n`);\r\nexports.page.code(`\r\nIConfig Disable(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Disable.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/EmptyLabel.ts":
/*!************************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/EmptyLabel.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/EmptyLabel');\r\nexports.page.setAsMember();\r\nexports.page.h1('EmptyLabel');\r\nexports.page.p(`\r\nUses an empty label for the drawer.\r\n`);\r\nexports.page.code(`\r\nIConfig EmptyLabel()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/EmptyLabel.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Enable.ts":
/*!********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Enable.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Enable');\r\nexports.page.setAsMember();\r\nexports.page.h1('Enable');\r\nexports.page.p(`\r\nIf property value be true, the drawer will be enabled.\r\n`);\r\nexports.page.code(`\r\nIConfig Enable(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Enable.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Exclude.ts":
/*!*********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Exclude.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Exclude');\r\nexports.page.setAsMember();\r\nexports.page.h1('Exclude');\r\nexports.page.p(`\r\nExcludes properties that will be shown by the DefaultInspector().\r\n`);\r\nexports.page.code(`\r\nIConfig Exclude(params string[] properties)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Exclude.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/FontStyle.ts":
/*!***********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/FontStyle.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/FontStyle');\r\nexports.page.setAsMember();\r\nexports.page.h1('FontStyle');\r\nexports.page.p(`\r\nSets font style of the content of the drawer.\r\n`);\r\nexports.page.code(`\r\nIConfig FontStyle(FontStyle fontStyle)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/FontStyle.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Hide.ts":
/*!******************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Hide.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Hide');\r\nexports.page.setAsMember();\r\nexports.page.h1('Hide');\r\nexports.page.p(`\r\nIf property value be true, the drawer will be hidden.\r\n`);\r\nexports.page.code(`\r\nIConfig Hide(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Hide.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/HideScriptReference.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/HideScriptReference.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/HideScriptReference');\r\nexports.page.setAsMember();\r\nexports.page.h1('HideScriptReference');\r\nexports.page.p(`\r\nHides the script reference field shown by the DefaultInspector().\r\n`);\r\nexports.page.code(`\r\nIConfig HideScriptReference()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/HideScriptReference.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Italic.ts":
/*!********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Italic.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Italic');\r\nexports.page.setAsMember();\r\nexports.page.h1('Italic');\r\nexports.page.p(`\r\nMakes the content of the drawer, italic.\r\n`);\r\nexports.page.code(`\r\nIConfig Italic()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Italic.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Label.ts":
/*!*******************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Label.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Label');\r\nexports.page.setAsMember();\r\nexports.page.h1('Label');\r\nexports.page.p(`\r\nSets the label of the drawer.\r\n`);\r\nexports.page.code(`\r\nIConfig Label(string label)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Label.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/LabelWidth.ts":
/*!************************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/LabelWidth.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/LabelWidth');\r\nexports.page.setAsMember();\r\nexports.page.h1('LabelWidth');\r\nexports.page.p(`\r\nSet the label width of the drawer.\r\n`);\r\nexports.page.code(`\r\nIConfig LabelWidth(int labelWidth)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/LabelWidth.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/LayoutOptions.ts":
/*!***************************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/LayoutOptions.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/LayoutOptions');\r\nexports.page.setAsMember();\r\nexports.page.h1('LayoutOptions');\r\nexports.page.p(`\r\nSet the layout options that will be used by the drawer.\r\n`);\r\nexports.page.code(`\r\nIConfig LayoutOptions(params GUILayoutOption[] options)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/LayoutOptions.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Max.ts":
/*!*****************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Max.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Max');\r\nexports.page.setAsMember();\r\nexports.page.h1('Max');\r\nexports.page.p(`\r\nSets max value of the input.\r\n`);\r\nexports.page.code(`\r\nIConfig Max(int max)\r\n---\r\nIConfig Max(long max)\r\n---\r\nIConfig Max(float max)\r\n---\r\nIConfig Max(double max)\r\n---\r\nIConfig Max(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Max.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Min.ts":
/*!*****************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Min.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Min');\r\nexports.page.setAsMember();\r\nexports.page.h1('Min');\r\nexports.page.p(`\r\nSets min value of the input.\r\n`);\r\nexports.page.code(`\r\nIConfig Min(int min)\r\n---\r\nIConfig Min(long min)\r\n---\r\nIConfig Min(float min)\r\n---\r\nIConfig Min(double min)\r\n---\r\nIConfig Min(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Min.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/OnChange.ts":
/*!**********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/OnChange.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/OnChange');\r\nexports.page.setAsMember();\r\nexports.page.h1('OnChange');\r\nexports.page.p(`\r\nDrawer will call the specified method every time the property value changes.\r\n`);\r\nexports.page.code(`\r\nIConfig OnChange(string methodName)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/OnChange.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Range.ts":
/*!*******************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Range.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Range');\r\nexports.page.setAsMember();\r\nexports.page.h1('Range');\r\nexports.page.p(`\r\nSets range of the input.\r\n`);\r\nexports.page.code(`\r\nIConfig Range(int min, int max)\r\n---\r\nIConfig Range(long min, long max)\r\n---\r\nIConfig Range(float min, float max)\r\n---\r\nIConfig Range(double min, double max)\r\n---\r\nIConfig Range(string minPropertyPath, string maxPropertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Range.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Readonly.ts":
/*!**********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Readonly.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Readonly');\r\nexports.page.setAsMember();\r\nexports.page.h1('Readonly');\r\nexports.page.p(`\r\nMakes the input readonly. (disables the input drawer)\r\n`);\r\nexports.page.code(`\r\nIConfig Readonly()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Readonly.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/RemoveLabel.ts":
/*!*************************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/RemoveLabel.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/RemoveLabel');\r\nexports.page.setAsMember();\r\nexports.page.h1('RemoveLabel');\r\nexports.page.p(`\r\nRemoves the prefix of the drawer.\r\n`);\r\nexports.page.code(`\r\nIConfig RemoveLabel()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/RemoveLabel.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/RichText.ts":
/*!**********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/RichText.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/RichText');\r\nexports.page.setAsMember();\r\nexports.page.h1('RichText');\r\nexports.page.p(`\r\nEnables support for rich text in the drawer.\r\n`);\r\nexports.page.code(`\r\nIConfig RichText()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/RichText.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Show.ts":
/*!******************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Show.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Show');\r\nexports.page.setAsMember();\r\nexports.page.h1('Show');\r\nexports.page.p(`\r\nIf property value be true, the drawer will be shown.\r\n`);\r\nexports.page.code(`\r\nIConfig Show(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Show.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Tooltip.ts":
/*!*********************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Tooltip.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Tooltip');\r\nexports.page.setAsMember();\r\nexports.page.h1('Tooltip');\r\nexports.page.p(`\r\nSets the tooltip of the drawer.\r\n`);\r\nexports.page.code(`\r\nIConfig Tooltip(string tooltip)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Tooltip.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/Editor/IConfig/Wide.ts":
/*!******************************************************!*\
  !*** ./src/pages/EasyToolset/Editor/IConfig/Wide.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/Editor/IConfig/Wide');\r\nexports.page.setAsMember();\r\nexports.page.h1('Wide');\r\nexports.page.p(`\r\nEnables the wide mode for the drawer.\r\n`);\r\nexports.page.code(`\r\nIConfig Wide()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/Editor/IConfig/Wide.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents.ts":
/*!*********************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents');\r\nexports.page.h1('GameEvents');\r\nexports.page.p(`\r\n    {GameEvents} is a static access, {Scene} independent event system.\r\n`);\r\nexports.page.code(`\r\nnamespace EasyToolset\r\n{\r\n    public static class GameEvents {...}\r\n}\r\n`);\r\nexports.page.h3('Members');\r\nexports.page.memberList({ value: 'On', summery: \"Adds the listener to an event.\" }, { value: 'Once', summery: \"Adds the listener to an event just for next emission.\" }, { value: 'Off', summery: \"Removes the listener of an event.\" }, { value: 'Emit', summery: \"Emits an event by its name.\" }, { value: 'Clear', summery: \"Removes all listeners of an event or all events.\" }, { value: 'eventCount', summery: \"Returns current registered event count.\" }, { value: 'GetNames', summery: \"Returns names of all regeistered events.\" }, { value: 'GetListenerCount', summery: \"Returns number of listeners of an event.\" }, { value: 'Reset', summery: \"Reinitializes the GameEvents.\" });\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents/Clear.ts":
/*!***************************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents/Clear.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents/Clear');\r\nexports.page.setAsMember();\r\nexports.page.h1('Clear');\r\nexports.page.p(`\r\nRemoves all listeners of an event or all events.\r\n`);\r\nexports.page.code(`\r\nvoid Clear()\r\n---\r\nvoid Clear(string eventName)\r\n---\r\nvoid Clear(string[] eventNames)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents/Clear.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents/Emit.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents/Emit.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents/Emit');\r\nexports.page.setAsMember();\r\nexports.page.h1('Emit');\r\nexports.page.p(`\r\nInvokes all the listeners of the event {eventName}.\r\n`);\r\nexports.page.code(`\r\nvoid Emit(string eventName)\r\n---\r\nvoid Emit(string eventName, object data)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents/Emit.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents/GetListenerCount.ts":
/*!**************************************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents/GetListenerCount.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents/GetListenerCount');\r\nexports.page.setAsMember();\r\nexports.page.h1('GetListenerCount');\r\nexports.page.p(`\r\nReturns count of registered listeners to the event eventName.\r\n`);\r\nexports.page.code(`\r\nint GetListenerCount(string eventName)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents/GetListenerCount.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents/GetNames.ts":
/*!******************************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents/GetNames.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents/GetNames');\r\nexports.page.setAsMember();\r\nexports.page.h1('GetNames');\r\nexports.page.p(`\r\nReturns the array of event names.\r\n`);\r\nexports.page.code(`\r\nstring[] GetNames()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents/GetNames.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents/Off.ts":
/*!*************************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents/Off.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents/Off');\r\nexports.page.setAsMember();\r\nexports.page.h1('Off');\r\nexports.page.p(`\r\nRemoves the listener from the event eventName.\r\n`);\r\nexports.page.code(`\r\nvoid Off(string eventName, Action listener)\r\n---\r\nvoid Off(string eventName, Action<object> listener)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents/Off.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents/On.ts":
/*!************************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents/On.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents/On');\r\nexports.page.setAsMember();\r\nexports.page.h1('On');\r\nexports.page.p(`\r\nAdds the listener to the event eventName.\r\n`);\r\nexports.page.code(`\r\nvoid On(string eventName, Action listener)\r\n---\r\nvoid On(string eventName, Action<object> listener)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents/On.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents/Once.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents/Once.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents/Once');\r\nexports.page.setAsMember();\r\nexports.page.h1('Once');\r\nexports.page.p(`\r\nAdds the listener to the event eventName just for next emit.\r\n`);\r\nexports.page.code(`\r\nvoid Once(string eventName, Action listener)\r\n---\r\nvoid Once(string eventName, Action<object> listener)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents/Once.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents/Reset.ts":
/*!***************************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents/Reset.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents/Reset');\r\nexports.page.setAsMember();\r\nexports.page.h1('Reset');\r\nexports.page.p(`\r\nReInitializes the GameEvents.\r\n`);\r\nexports.page.code(`\r\nvoid Reset()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents/Reset.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/GameEvents/eventCount.ts":
/*!********************************************************!*\
  !*** ./src/pages/EasyToolset/GameEvents/eventCount.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/GameEvents/eventCount');\r\nexports.page.setAsMember();\r\nexports.page.h1('eventCount');\r\nexports.page.p(`\r\nReturns number of events that currently exists in the event system.\r\n`);\r\nexports.page.code(`\r\nint eventCount { get; }\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/GameEvents/eventCount.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e.ts":
/*!************************************!*\
  !*** ./src/pages/EasyToolset/e.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e');\r\nexports.page.h1('e.[shortcuts]');\r\nexports.page.p(`\r\n    This class contains list of shortcut methods to different tools of the plugin plus\r\n    some other useful utilities such as Random value generators, math functions and timers.\r\n`);\r\nexports.page.code(`\r\nnamespace EasyToolset\r\n{\r\n    public static class e {...}\r\n}\r\n`);\r\nexports.page.h3(\"Members\");\r\n// page.h3('AudioPlayer Shortcuts')\r\nexports.page.memberList({ value: 'Play', summery: \"Plays AudioClips via AudioPlayer.\" });\r\n// Events\r\nexports.page.memberList({ value: 'On', summery: \"Adds a listener to an event of the GameEvents.\" }, { value: 'Once', summery: \"Adds a listener to an event of the GameEvents only for next emission.\" }, { value: 'Off', summery: \"Removes The listener from an event of the GameEvents.\" }, { value: 'Emit', summery: \"Invoke all the listener of an event of the GameEvents.\" });\r\n// Follow\r\nexports.page.memberList({ value: 'Follow', summery: \"Binds a transform's position of an GameObject to another Transform, without changing the hierarchy.\" }, { value: 'StopFollower', summery: \"Stops following behaviour that starts with 'Follow'.\" });\r\n// Math\r\nexports.page.memberList({ value: 'Radian', summery: \"Turns a angle in degree to radian.\" }, { value: 'Degree', summery: \"Turns a angle in radian to degree.\" }, { value: 'Sin', summery: \"Returns sine value of an angle.\" }, { value: 'Cos', summery: \"Returns cosine value of an angle\" }, { value: 'Tan', summery: \"Returns Tangent value of an angle\" }, { value: 'Asin', summery: \"Returns angle (radian) of the sine value.\" }, { value: 'Acos', summery: \"Returns angle (radian) of the cosine value.\" }, { value: 'Atan', summery: \"Returns angle (radian) of the tangent value.\" }, { value: 'Abs', summery: \"Returns absolute of a value.\" }, { value: 'Clamp', summery: \"Clamps a value between min and max.\" }, { value: 'Clamp01', summery: \"Clamps a value between 0 and 1.\" }, { value: 'Lerp', summery: \"Linear interpolation between two value. (int, float, double, Vector2, Vector3, Color)\" }, { value: 'LerpUnclamped', summery: \"Unclamped linear interpolation between two value.\" }, { value: 'Min', summery: \"Returns minimum value of two or more values.\" }, { value: 'Max', summery: \"Returns maximum value of two or more values.\" }, { value: 'Floor', summery: \"Returns largest integer value lower than or equal to a number.\" }, { value: 'Ceiling', summery: \"Returns smallest integer value greater than or equal to a number.\" }, { value: 'Round', summery: \"Rounds an floating point value to it's nearest integer value.\" }, { value: 'Sign', summery: \"Returns sign representation of a number. (-1, 0, 1)\" }, { value: 'Sqrt', summery: \"Returns square root of the value.\" }, { value: 'Pow', summery: \"Raise the value to the specified power and returns it.\" });\r\n// Random\r\nexports.page.memberList({ value: 'RandomBool', summery: \"Returns a random boolean value.\" }, { value: 'RandomInt', summery: \"Returns a random integer value.\" }, { value: 'RandomFloat', summery: \"Returns a random float value.\" }, { value: 'RandomDouble', summery: \"Returns a random double value.\" }, { value: 'RandomElement', summery: \"Returns a random element of an array or a list.\" }, { value: 'RandomVector2', summery: \"Returns a random Vector2 value.\" }, { value: 'RandomVector3', summery: \"Returns a random Vector3 value.\" }, { value: 'RandomColor', summery: \"Returns a random Color value.\" });\r\n// Timers\r\nexports.page.memberList({ value: 'SetTimeout', summery: \"Invokes a method after a delay.\" }, { value: 'SetInterval', summery: \"Invokes a method repetitively after each time interval.\" }, { value: 'StopTimer', summery: \"Stops the timer that started by SetTimeout or SetInterval.\" });\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI.ts":
/*!***************************************!*\
  !*** ./src/pages/EasyToolset/eGUI.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI');\r\nexports.page.h1('eGUI');\r\nexports.page.p(`\r\n    {eGUI} is the class to help you to create custom editor for you behaviour without needing\r\n    to extending the {UnityEditor.Editor} class of the unity.\r\n`);\r\nexports.page.code(`\r\nnamespace EasyToolset\r\n{\r\n    public static class eGUI {...}\r\n}\r\n`);\r\nexports.page.h3('Members');\r\nexports.page.memberList({ value: 'Indent', summery: \"Increases the indent level in the scope.\" }, { value: 'LabelWidth', summery: \"Sets the label width of the controllers in the scope\" }, { value: 'Horizontal', summery: \"Groups the controllers in a horizontal layout group.\" }, { value: 'Vertical', summery: \"Groups the controllers in a vertical layout group.\" }, { value: 'Box', summery: \"Groups the controllers in a box.\" }, { value: 'Foldout', summery: \"Groups the controllers in a foldout group\" }, { value: 'Show', summery: \"It shows the controllers in the scope if property value be true.\" }, { value: 'Hide', summery: \"It hides the controllers in the scope if property value be true.\" }, { value: 'Enable', summery: \"It enables the controllers in the scope if property value be true.\" }, { value: 'Disable', summery: \"It disables the controllers in the scope if property value be true.\" });\r\nexports.page.memberList({ value: 'Space', summery: \"Adds a space to the editor.\" }, { value: 'Line', summery: \"Adds a horizontal line to the editor.\" });\r\nexports.page.memberList({ value: 'Header', summery: \"Adds a bold header to the editor.\" }, { value: 'Paragraph', summery: \"Adds a plain text to the editor.\" });\r\nexports.page.memberList({ value: 'Link', summery: \"Adds a clickable link to the editor.\" }, { value: 'Button', summery: \"Adds a button to the editor.\" });\r\nexports.page.memberList({ value: 'Prefix', summery: \"Adds a prefix label for the next controller.\" }, { value: 'Label', summery: \"Adds a label text with content of a property.\" });\r\nexports.page.memberList({ value: 'Message', summery: \"Adds a dynamic message box to the editor.\" }, { value: 'Info', summery: \"Adds a dynamic info box to the editor.\" }, { value: 'Warning', summery: \"Adds a dynamic warning box to the editor.\" }, { value: 'Error', summery: \"Adds a dynamic error box to the editor.\" });\r\nexports.page.memberList({ value: 'DefaultInspector', summery: \"Draws the default inspector of the target type.\" }, { value: 'Property', summery: \"Draws the default input for the target property.\" });\r\nexports.page.memberList({ value: 'Toggle', summery: \"Adds a toggle input to the editor.\" }, { value: 'ToggleLeft', summery: \"Adds a toggle input to the editor.\" }, \r\n// { value: 'ToggleButton', summery: \"Adds a toggle input to the editor.\" },\r\n{ value: 'ToggleSwitch', summery: \"Adds a toggle input to the editor.\" });\r\nexports.page.memberList({ value: 'Int', summery: \"Adds an integer input to the editor.\" }, { value: 'Long', summery: \"Adds a long input to the editor.\" }, { value: 'Float', summery: \"Adds a float input to the editor.\" }, { value: 'Double', summery: \"Adds a double input to the editor.\" });\r\nexports.page.memberList({ value: 'Slider', summery: \"Adds a slider to the editor.\" });\r\nexports.page.memberList({ value: 'Text', summery: \"Adds a text input to the editor.\" }, { value: 'TextArea', summery: \"Adds a text input to the editor.\" }, { value: 'Password', summery: \"Adds a password input to the editor.\" });\r\nexports.page.memberList({ value: 'Object', summery: \"Adds an Object input to the editor.\" });\r\nexports.page.memberList({ value: 'Enum', summery: \"Adds an enum input to the editor.\" }, { value: 'Flags', summery: \"Adds a flags input to the editor.\" });\r\nexports.page.memberList({ value: 'Vector2', summery: \"Adds a Vector2 input to the editor.\" }, { value: 'Vector2Int', summery: \"Adds a Vector2Int input to the editor.\" }, { value: 'Vector3', summery: \"Adds a Vector3 input to the editor.\" }, { value: 'Vector3Int', summery: \"Adds a Vector3Int input to the editor.\" }, { value: 'Vector4', summery: \"Adds a Vector4 input to the editor.\" });\r\nexports.page.memberList({ value: 'Color', summery: \"Adds a Color input to the editor.\" });\r\nexports.page.memberList({ value: 'Tag', summery: \"Adds a tag selector to the editor.\" }, { value: 'Layer', summery: \"Adds a layer selector to the editor.\" }, { value: 'SortingLayer', summery: \"Adds a sorting layer selector to the editor.\" }, { value: 'ProgressBar', summery: \"Adds a progress bar to the editor.\" });\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Box.ts":
/*!*******************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Box.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Box');\r\nexports.page.setAsMember();\r\nexports.page.h1('Box');\r\nexports.page.p(`\r\nGroups the drawers of the scope in a Box.\r\n`);\r\nexports.page.code(`\r\nIDisposable Box()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Box.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Button.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Button.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Button');\r\nexports.page.setAsMember();\r\nexports.page.h1('Button');\r\nexports.page.p(`\r\nAdds a button to the editor.\r\n`);\r\nexports.page.code(`\r\nIConfig Button(string methodName)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Button.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Color.ts":
/*!*********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Color.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Color');\r\nexports.page.setAsMember();\r\nexports.page.h1('Color');\r\nexports.page.p(`\r\nAdds a color input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Color(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Color.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/DefaultInspector.ts":
/*!********************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/DefaultInspector.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/DefaultInspector');\r\nexports.page.setAsMember();\r\nexports.page.h1('DefaultInspector');\r\nexports.page.p(`\r\nDraws the default inspector for the target type.\r\n`);\r\nexports.page.code(`\r\nIConfig DefaultInspector()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/DefaultInspector.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Disable.ts":
/*!***********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Disable.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Disable');\r\nexports.page.setAsMember();\r\nexports.page.h1('Disable');\r\nexports.page.p(`\r\nDisables the drawers of the scope, if property value be true.\r\n`);\r\nexports.page.code(`\r\nIDisposable Disable(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Disable.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Double.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Double.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Double');\r\nexports.page.setAsMember();\r\nexports.page.h1('Double');\r\nexports.page.p(`\r\nAdds a double input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Double(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Double.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Enable.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Enable.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Enable');\r\nexports.page.setAsMember();\r\nexports.page.h1('Enable');\r\nexports.page.p(`\r\nEnables the drawers of the scope, if property value be true.\r\n`);\r\nexports.page.code(`\r\nIDisposable Enable(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Enable.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Enum.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Enum');\r\nexports.page.setAsMember();\r\nexports.page.h1('Enum');\r\nexports.page.p(`\r\nAdds a enum input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Enum(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Enum.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Error.ts":
/*!*********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Error.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Error');\r\nexports.page.setAsMember();\r\nexports.page.h1('Error');\r\nexports.page.p(`\r\nAdds a error box with dynamic content.\r\n`);\r\nexports.page.code(`\r\nIConfig Error(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Error.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Flags.ts":
/*!*********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Flags.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Flags');\r\nexports.page.setAsMember();\r\nexports.page.h1('Flags');\r\nexports.page.p(`\r\nAdds a enum flags input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Flags(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Flags.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Float.ts":
/*!*********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Float.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Float');\r\nexports.page.setAsMember();\r\nexports.page.h1('Float');\r\nexports.page.p(`\r\nAdds a float input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Float(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Float.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Foldout.ts":
/*!***********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Foldout.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Foldout');\r\nexports.page.setAsMember();\r\nexports.page.h1('Foldout');\r\nexports.page.p(`\r\nGroups the drawers of the scope in a FoldoutGroup.\r\n`);\r\nexports.page.code(`\r\nIDisposable Foldout(string label)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Foldout.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Header.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Header.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Header');\r\nexports.page.setAsMember();\r\nexports.page.h1('Header');\r\nexports.page.p(`\r\nAdds a bold title.\r\n`);\r\nexports.page.code(`\r\nIConfig Header(string text, bool showLine = false)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Header.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Hide.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Hide.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Hide');\r\nexports.page.setAsMember();\r\nexports.page.h1('Hide');\r\nexports.page.p(`\r\nHides the drawers of the scope, if property value be true.\r\n`);\r\nexports.page.code(`\r\nIDisposable Hide(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Hide.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Horizontal.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Horizontal.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Horizontal');\r\nexports.page.setAsMember();\r\nexports.page.h1('Horizontal');\r\nexports.page.p(`\r\nGroups the drawers of the scope in a HorizontalGroup.\r\n`);\r\nexports.page.code(`\r\nIDisposable Horizontal()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Horizontal.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Indent.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Indent.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Indent');\r\nexports.page.setAsMember();\r\nexports.page.h1('Indent');\r\nexports.page.p(`\r\nIncreases the indent level int the scope.\r\n`);\r\nexports.page.code(`\r\nIDisposable Indent(int increment = 1)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Indent.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Info.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Info.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Info');\r\nexports.page.setAsMember();\r\nexports.page.h1('Info');\r\nexports.page.p(`\r\nAdds a info box with dynamic content.\r\n`);\r\nexports.page.code(`\r\nIConfig Info(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Info.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Int.ts":
/*!*******************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Int.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Int');\r\nexports.page.setAsMember();\r\nexports.page.h1('Int');\r\nexports.page.p(`\r\nAdds a integer input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Int(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Int.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Label.ts":
/*!*********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Label.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Label');\r\nexports.page.setAsMember();\r\nexports.page.h1('Label');\r\nexports.page.p(`\r\nAdds a readonly text with value of a property.\r\n`);\r\nexports.page.code(`\r\nIConfig Label(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Label.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/LabelWidth.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/LabelWidth.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/LabelWidth');\r\nexports.page.setAsMember();\r\nexports.page.h1('LabelWidth');\r\nexports.page.p(`\r\nSets the label width of the drawers in the scope.\r\n`);\r\nexports.page.code(`\r\nIDisposable LabelWidth(int labelWidth)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/LabelWidth.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Layer.ts":
/*!*********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Layer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Layer');\r\nexports.page.setAsMember();\r\nexports.page.h1('Layer');\r\nexports.page.p(`\r\nAdds a layer selection input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Layer(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Layer.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Line.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Line.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Line');\r\nexports.page.setAsMember();\r\nexports.page.h1('Line');\r\nexports.page.p(`\r\nAdds a horizontal line.\r\n`);\r\nexports.page.code(`\r\nvoid Line()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Line.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Link.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Link.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Link');\r\nexports.page.setAsMember();\r\nexports.page.h1('Link');\r\nexports.page.p(`\r\nAdds a clickable link to the editor.\r\n`);\r\nexports.page.code(`\r\nIConfig Link(string methodName)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Link.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Long.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Long.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Long');\r\nexports.page.setAsMember();\r\nexports.page.h1('Long');\r\nexports.page.p(`\r\nAdds a long input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Long(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Long.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Message.ts":
/*!***********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Message.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Message');\r\nexports.page.setAsMember();\r\nexports.page.h1('Message');\r\nexports.page.p(`\r\nAdds a message box with dynamic content.\r\n`);\r\nexports.page.code(`\r\nIConfig Message(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Message.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Object.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Object.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Object');\r\nexports.page.setAsMember();\r\nexports.page.h1('Object');\r\nexports.page.p(`\r\nAdds a UnityEngine.Object input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Object(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Object.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Paragraph.ts":
/*!*************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Paragraph.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Paragraph');\r\nexports.page.setAsMember();\r\nexports.page.h1('Paragraph');\r\nexports.page.p(`\r\nAdds a multiline text.\r\n`);\r\nexports.page.code(`\r\nIConfig Paragraph(string text)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Paragraph.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Password.ts":
/*!************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Password.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Password');\r\nexports.page.setAsMember();\r\nexports.page.h1('Password');\r\nexports.page.p(`\r\nAdds a password input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Password(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Password.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Prefix.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Prefix.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Prefix');\r\nexports.page.setAsMember();\r\nexports.page.h1('Prefix');\r\nexports.page.p(`\r\nAdds a prefix label for the next drawer.\r\n`);\r\nexports.page.code(`\r\nvoid Prefix(string text)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Prefix.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/ProgressBar.ts":
/*!***************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/ProgressBar.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/ProgressBar');\r\nexports.page.setAsMember();\r\nexports.page.h1('ProgressBar');\r\nexports.page.p(`\r\nAdds a progress bar.\r\n`);\r\nexports.page.code(`\r\nIConfig ProgressBar(string propertyPath, bool hideValue = false)\r\n---\r\nIConfig ProgressBar(string propertyPath, float min, float max, bool hideValue = false)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/ProgressBar.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Property.ts":
/*!************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Property.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Property');\r\nexports.page.setAsMember();\r\nexports.page.h1('Property');\r\nexports.page.p(`\r\nAdds a property input field. (for serialized and non-serialized properties)\r\n`);\r\nexports.page.code(`\r\nIConfig Property(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Property.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Show.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Show.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Show');\r\nexports.page.setAsMember();\r\nexports.page.h1('Show');\r\nexports.page.p(`\r\nShows the drawers of the scope, if property value be true.\r\n`);\r\nexports.page.code(`\r\nIDisposable Show(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Show.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Slider.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Slider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Slider');\r\nexports.page.setAsMember();\r\nexports.page.h1('Slider');\r\nexports.page.p(`\r\nAdds a slider to the editor.\r\n`);\r\nexports.page.code(`\r\nIConfig Slider(string propertyPath)\r\n---\r\nIConfig Slider(string propertyPath, int min, int max)\r\n---\r\nIConfig Slider(string propertyPath, long min, long max)\r\n---\r\nIConfig Slider(string propertyPath, float min, float max)\r\n---\r\nIConfig Slider(string propertyPath, double min, double max)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Slider.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/SortingLayer.ts":
/*!****************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/SortingLayer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/SortingLayer');\r\nexports.page.setAsMember();\r\nexports.page.h1('SortingLayer');\r\nexports.page.p(`\r\nAdds a sorting layer selection input field.\r\n`);\r\nexports.page.code(`\r\nIConfig SortingLayer(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/SortingLayer.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Space.ts":
/*!*********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Space.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Space');\r\nexports.page.setAsMember();\r\nexports.page.h1('Space');\r\nexports.page.p(`\r\nMakes a space between the drawers or groups.\r\n`);\r\nexports.page.code(`\r\nvoid Space()\r\n---\r\nvoid Space(int width)\r\n---\r\nvoid Space(int width, bool expand)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Space.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Tag.ts":
/*!*******************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Tag.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Tag');\r\nexports.page.setAsMember();\r\nexports.page.h1('Tag');\r\nexports.page.p(`\r\nAdds a tag selection input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Tag(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Tag.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Text.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Text.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Text');\r\nexports.page.setAsMember();\r\nexports.page.h1('Text');\r\nexports.page.p(`\r\nAdds a text input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Text(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Text.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/TextArea.ts":
/*!************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/TextArea.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/TextArea');\r\nexports.page.setAsMember();\r\nexports.page.h1('TextArea');\r\nexports.page.p(`\r\nAdds a text area input field.\r\n`);\r\nexports.page.code(`\r\nIConfig TextArea(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/TextArea.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Toggle.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Toggle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Toggle');\r\nexports.page.setAsMember();\r\nexports.page.h1('Toggle');\r\nexports.page.p(`\r\nAdds a boolean input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Toggle(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Toggle.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/ToggleLeft.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/ToggleLeft.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/ToggleLeft');\r\nexports.page.setAsMember();\r\nexports.page.h1('ToggleLeft');\r\nexports.page.p(`\r\nAdds a boolean input field.\r\n`);\r\nexports.page.code(`\r\nIConfig ToggleLeft(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/ToggleLeft.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/ToggleSwitch.ts":
/*!****************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/ToggleSwitch.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/ToggleSwitch');\r\nexports.page.setAsMember();\r\nexports.page.h1('ToggleSwitch');\r\nexports.page.p(`\r\nAdds a boolean input field.\r\n`);\r\nexports.page.code(`\r\nIConfig ToggleSwitch(string propertyPath, string off, string on)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/ToggleSwitch.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Vector2.ts":
/*!***********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Vector2.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Vector2');\r\nexports.page.setAsMember();\r\nexports.page.h1('Vector2');\r\nexports.page.p(`\r\nAdds a vector2 input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Vector2(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Vector2.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Vector2Int.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Vector2Int.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Vector2Int');\r\nexports.page.setAsMember();\r\nexports.page.h1('Vector2Int');\r\nexports.page.p(`\r\nAdds a vector2int input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Vector2Int(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Vector2Int.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Vector3.ts":
/*!***********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Vector3.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Vector3');\r\nexports.page.setAsMember();\r\nexports.page.h1('Vector3');\r\nexports.page.p(`\r\nAdds a vector3 input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Vector3(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Vector3.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Vector3Int.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Vector3Int.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Vector3Int');\r\nexports.page.setAsMember();\r\nexports.page.h1('Vector3Int');\r\nexports.page.p(`\r\nAdds a vector3int input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Vector3Int(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Vector3Int.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Vector4.ts":
/*!***********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Vector4.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Vector4');\r\nexports.page.setAsMember();\r\nexports.page.h1('Vector4');\r\nexports.page.p(`\r\nAdds a vector4 input field.\r\n`);\r\nexports.page.code(`\r\nIConfig Vector4(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Vector4.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Vertical.ts":
/*!************************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Vertical.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Vertical');\r\nexports.page.setAsMember();\r\nexports.page.h1('Vertical');\r\nexports.page.p(`\r\nGroups the drawers of the scope in a VerticalGroup.\r\n`);\r\nexports.page.code(`\r\nIDisposable Vertical()\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Vertical.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/eGUI/Warning.ts":
/*!***********************************************!*\
  !*** ./src/pages/EasyToolset/eGUI/Warning.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/eGUI/Warning');\r\nexports.page.setAsMember();\r\nexports.page.h1('Warning');\r\nexports.page.p(`\r\nAdds a warning box with dynamic content.\r\n`);\r\nexports.page.code(`\r\nIConfig Warning(string propertyPath)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/eGUI/Warning.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Abs.ts":
/*!****************************************!*\
  !*** ./src/pages/EasyToolset/e/Abs.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Abs');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Abs');\r\nexports.page.p(`\r\nReturns absolute of a value.\r\n`);\r\nexports.page.code(`\r\nint Abs(int value)\r\n---\r\nlong Abs(long value)\r\n---\r\nfloat Abs(float value)\r\n---\r\ndouble Abs(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Abs.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Acos.ts":
/*!*****************************************!*\
  !*** ./src/pages/EasyToolset/e/Acos.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Acos');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Acos');\r\nexports.page.p(`\r\nRetunrs the angle of the cosine value.\r\n`);\r\nexports.page.code(`\r\nfloat Acos(float value)\r\n---\r\ndouble Acos(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Acos.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Asin.ts":
/*!*****************************************!*\
  !*** ./src/pages/EasyToolset/e/Asin.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Asin');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Asin');\r\nexports.page.p(`\r\nReturns angle of the sine value.\r\n`);\r\nexports.page.code(`\r\nfloat Asin(float value)\r\n---\r\ndouble Asin(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Asin.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Atan.ts":
/*!*****************************************!*\
  !*** ./src/pages/EasyToolset/e/Atan.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Atan');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Atan');\r\nexports.page.p(`\r\nReturns angle of the tangent value.\r\n`);\r\nexports.page.code(`\r\nfloat Atan(float value)\r\n---\r\ndouble Atan(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Atan.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Ceiling.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/e/Ceiling.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Ceiling');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Ceiling');\r\nexports.page.p(`\r\nReturns smallest integer value greater than or equal to a number.\r\n`);\r\nexports.page.code(`\r\nfloat Ceiling(float value)\r\n---\r\ndouble Ceiling(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Ceiling.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Clamp.ts":
/*!******************************************!*\
  !*** ./src/pages/EasyToolset/e/Clamp.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Clamp');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Clamp');\r\nexports.page.p(`\r\nClamps a value between min and max.\r\n`);\r\nexports.page.code(`\r\nint Clamp(int value, int min, int max)\r\n---\r\nfloat Clamp(float value, float min, float max)\r\n---\r\ndouble Clamp(double value, double min, double max)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Clamp.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Clamp01.ts":
/*!********************************************!*\
  !*** ./src/pages/EasyToolset/e/Clamp01.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Clamp01');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Clamp01');\r\nexports.page.p(`\r\nClamps a value between 0 to 1.\r\n`);\r\nexports.page.code(`\r\nfloat Clamp01(float value)\r\n---\r\ndouble Clamp01(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Clamp01.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Cos.ts":
/*!****************************************!*\
  !*** ./src/pages/EasyToolset/e/Cos.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Cos');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Cos');\r\nexports.page.p(`\r\nReturns the cosine value of the angle. (radian)\r\n`);\r\nexports.page.code(`\r\nfloat Cos(float radian)\r\n---\r\ndouble Cos(double radian)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Cos.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Degree.ts":
/*!*******************************************!*\
  !*** ./src/pages/EasyToolset/e/Degree.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Degree');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Degree');\r\nexports.page.p(`\r\nTurns a radian angle to degree.\r\n`);\r\nexports.page.code(`\r\nfloat Degree(float radian)\r\n---\r\ndouble Degree(double radian)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Degree.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Emit.ts":
/*!*****************************************!*\
  !*** ./src/pages/EasyToolset/e/Emit.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Emit');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Emit');\r\nexports.page.p(`\r\nEmits one of the events of the GameEvents.\r\n`);\r\nexports.page.code(`\r\nvoid Emit(string eventName)\r\n---\r\nvoid Emit<T>(string eventName, T data)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Emit.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Floor.ts":
/*!******************************************!*\
  !*** ./src/pages/EasyToolset/e/Floor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Floor');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Floor');\r\nexports.page.p(`\r\nReturns the largest integer value less than or equal to the value.\r\n`);\r\nexports.page.code(`\r\nint Floor(float value)\r\n---\r\nint Floor(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Floor.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Follow.ts":
/*!*******************************************!*\
  !*** ./src/pages/EasyToolset/e/Follow.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Follow');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Follow');\r\nexports.page.p(`\r\nBinds the position of a transform to another transform.\r\n`);\r\nexports.page.code(`\r\nvoid Follow(Transform follower, Transform target)\r\n---\r\nvoid Follow(Transform follower, Transform target, bool keepDistance)\r\n---\r\nvoid Follow(Transform follower, Transform target, Vector3 offset)\r\n---\r\nvoid Follow(Transform follower, Transform target, Action<Transform, Transform> method)\r\n---\r\nvoid Follow(Transform follower, Transform target, Func<Vector3, Vector3, Vector3> method)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Follow.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Lerp.ts":
/*!*****************************************!*\
  !*** ./src/pages/EasyToolset/e/Lerp.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Lerp');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Lerp');\r\nexports.page.p(`\r\nLinear interpolation of two value by t. (this will clamp 't' to 0-1)\r\n`);\r\nexports.page.code(`\r\nfloat Lerp(float a, float b, float t)\r\n---\r\ndouble Lerp(double a, double b, double t)\r\n---\r\nVector2 Lerp(Vector2 a, Vector2 b, float t)\r\n---\r\nVector3 Lerp(Vector3 a, Vector3 b, float t)\r\n---\r\nColor Lerp(Color a, Color b, float t)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Lerp.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/LerpUnclamped.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/e/LerpUnclamped.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/LerpUnclamped');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.LerpUnclamped');\r\nexports.page.p(`\r\nLinear Interpolation of two value by unclamped t.\r\n`);\r\nexports.page.code(`\r\nfloat LerpUnclamped(float a, float b, float t)\r\n---\r\ndouble LerpUnclamped(double a, double b, double t)\r\n---\r\nVector2 LerpUnclamped(Vector2 a, Vector2 b, float t)\r\n---\r\nVector3 LerpUnclamped(Vector3 a, Vector3 b, float t)\r\n---\r\nColor LerpUnclamped(Color a, Color b, float t)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/LerpUnclamped.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Max.ts":
/*!****************************************!*\
  !*** ./src/pages/EasyToolset/e/Max.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Max');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Max');\r\nexports.page.p(`\r\nReturns the maximum value between the values.\r\n`);\r\nexports.page.code(`\r\nint Max(int a, int b)\r\n---\r\nint Max(params int[] values)\r\n---\r\nint Max(IEnumerable<int> source)\r\n---\r\nfloat Max(float a, float b)\r\n---\r\nfloat Max(params float[] values)\r\n---\r\nfloat Max(IEnumerable<float> source)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Max.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Min.ts":
/*!****************************************!*\
  !*** ./src/pages/EasyToolset/e/Min.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Min');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Min');\r\nexports.page.p(`\r\nReturns the minimum value between the values.\r\n`);\r\nexports.page.code(`\r\nint Min(int a, int b)\r\n---\r\nint Min(params int[] values)\r\n---\r\nint Min(IEnumerable<int> source)\r\n---\r\nfloat Min(float a, float b)\r\n---\r\nfloat Min(params float[] values)\r\n---\r\nfloat Min(IEnumerable<float> source)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Min.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Off.ts":
/*!****************************************!*\
  !*** ./src/pages/EasyToolset/e/Off.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Off');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Off');\r\nexports.page.p(`\r\nRemoves the listener from the target event.\r\n`);\r\nexports.page.code(`\r\nvoid Off(string eventName, Action listener)\r\n---\r\nvoid Off<T>(string eventName, Action<T> listener)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Off.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/On.ts":
/*!***************************************!*\
  !*** ./src/pages/EasyToolset/e/On.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/On');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.On');\r\nexports.page.p(`\r\nAdd a listener to the target event.\r\n`);\r\nexports.page.code(`\r\nvoid On(string eventName, Action listener)\r\n---\r\nvoid On<T>(string eventName, Action<T> listener)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/On.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Once.ts":
/*!*****************************************!*\
  !*** ./src/pages/EasyToolset/e/Once.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Once');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Once');\r\nexports.page.p(`\r\nAdds a listener to the target event just for next call.\r\n`);\r\nexports.page.code(`\r\nvoid Once(string eventName, Action listener)\r\n---\r\nvoid Once<T>(string eventName, Action<T> listener)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Once.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Play.ts":
/*!*****************************************!*\
  !*** ./src/pages/EasyToolset/e/Play.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Play');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Play');\r\nexports.page.p(`\r\nPlays an AudioClip via AudioPlayer.\r\n`);\r\nexports.page.code(`\r\nvoid Play(AudioClip clip)\r\n---\r\nvoid Play(AudioClip clip, float volume)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Play.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Pow.ts":
/*!****************************************!*\
  !*** ./src/pages/EasyToolset/e/Pow.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Pow');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Pow');\r\nexports.page.p(`\r\nRises the value to a specified power and return the result.\r\n`);\r\nexports.page.code(`\r\nfloat Pow(float value, float power)\r\n---\r\ndouble Pow(double value, double power)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Pow.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Radian.ts":
/*!*******************************************!*\
  !*** ./src/pages/EasyToolset/e/Radian.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Radian');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Radian');\r\nexports.page.p(`\r\nTurns a degree to radian.\r\n`);\r\nexports.page.code(`\r\nfloat Radian(float degree)\r\n---\r\ndouble Radian(double degree)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Radian.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/RandomBool.ts":
/*!***********************************************!*\
  !*** ./src/pages/EasyToolset/e/RandomBool.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/RandomBool');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.RandomBool');\r\nexports.page.p(`\r\nReturns a random boolean value.\r\n`);\r\nexports.page.code(`\r\nbool RandomBool()\r\n---\r\nbool RandomBool(float weight)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/RandomBool.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/RandomColor.ts":
/*!************************************************!*\
  !*** ./src/pages/EasyToolset/e/RandomColor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/RandomColor');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.RandomColor');\r\nexports.page.p(`\r\nReturns a random color value.\r\n`);\r\nexports.page.code(`\r\nColor RandomColor()\r\n---\r\nColor RandomColor(Vector2 hue)\r\n---\r\nColor RandomColor(Vector2 hue, Vector2 saturation)\r\n---\r\nColor RandomColor(Vector2 hue, Vector2 saturation, Vector2 value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/RandomColor.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/RandomDouble.ts":
/*!*************************************************!*\
  !*** ./src/pages/EasyToolset/e/RandomDouble.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/RandomDouble');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.RandomDouble');\r\nexports.page.p(`\r\nReturns a random double value.\r\n`);\r\nexports.page.code(`\r\ndouble RandomDouble()\r\n---\r\ndouble RandomDouble(double max)\r\n---\r\ndouble RandomDouble(double min, double max)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/RandomDouble.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/RandomElement.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/e/RandomElement.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/RandomElement');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.RandomElement');\r\nexports.page.p(`\r\nReturns a random element within an array or a list.\r\n`);\r\nexports.page.code(`\r\nT RandomElement<T>(T[] array)\r\n---\r\nT RandomElement<T>(T[] array, out int index)\r\n---\r\nT RandomElement<T>(List<T> list)\r\n---\r\nT RandomElement<T>(List<T> list, out int index)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/RandomElement.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/RandomFloat.ts":
/*!************************************************!*\
  !*** ./src/pages/EasyToolset/e/RandomFloat.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/RandomFloat');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.RandomFloat');\r\nexports.page.p(`\r\nReturns a random float value.\r\n`);\r\nexports.page.code(`\r\nfloat RandomFloat()\r\n---\r\nfloat RandomFloat(float max)\r\n---\r\nfloat RandomFloat(float min, float max)\r\n---\r\nfloat RandomFloat(Vector2 range)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/RandomFloat.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/RandomInt.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/e/RandomInt.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/RandomInt');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.RandomInt');\r\nexports.page.p(`\r\nReturns a random integer value.\r\n`);\r\nexports.page.code(`\r\nint RandomInt()\r\n---\r\nint RandomInt(int max)\r\n---\r\nint RandomInt(int min, int max)\r\n---\r\nint RandomInt(Vector2Int range)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/RandomInt.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/RandomVector2.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/e/RandomVector2.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/RandomVector2');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.RandomVector2');\r\nexports.page.p(`\r\nReturns a random Vector2 value.\r\n`);\r\nexports.page.code(`\r\nVector2 RandomVector2()\r\n---\r\nVector2 RandomVector2(float radius)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/RandomVector2.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/RandomVector3.ts":
/*!**************************************************!*\
  !*** ./src/pages/EasyToolset/e/RandomVector3.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/RandomVector3');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.RandomVector3');\r\nexports.page.p(`\r\nReturns a random Vector3 value.\r\n`);\r\nexports.page.code(`\r\nVector3 RandomVector3()\r\n---\r\nVector3 RandomVector3(float radius)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/RandomVector3.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Round.ts":
/*!******************************************!*\
  !*** ./src/pages/EasyToolset/e/Round.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Round');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Round');\r\nexports.page.p(`\r\nRounds a floating point value to its nearest integer.\r\n`);\r\nexports.page.code(`\r\nint Round(float value)\r\n---\r\nint Round(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Round.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/SetInterval.ts":
/*!************************************************!*\
  !*** ./src/pages/EasyToolset/e/SetInterval.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/SetInterval');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.SetInterval');\r\nexports.page.p(`\r\nInvokes a method repetitively after each time interval.\r\n`);\r\nexports.page.code(`\r\nint SetInterval(Action callback, float delay)\r\n---\r\nint SetInterval<T>(Action<T> callback, float delay, T arg)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/SetInterval.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/SetTimeout.ts":
/*!***********************************************!*\
  !*** ./src/pages/EasyToolset/e/SetTimeout.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/SetTimeout');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.SetTimeout');\r\nexports.page.p(`\r\nInvokes a method after a delay. (seconds)\r\n`);\r\nexports.page.code(`\r\nint SetTimeout(Action callback, float delay)\r\n---\r\nint SetTimeout<T>(Action<T> callback, float delay, T arg)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/SetTimeout.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Sign.ts":
/*!*****************************************!*\
  !*** ./src/pages/EasyToolset/e/Sign.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Sign');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Sign');\r\nexports.page.p(`\r\nReturns the sign of the number. (-1, 0, 1)\r\n`);\r\nexports.page.code(`\r\nint Sign(int value)\r\n---\r\nint Sign(float value)\r\n---\r\nint Sign(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Sign.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Sin.ts":
/*!****************************************!*\
  !*** ./src/pages/EasyToolset/e/Sin.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Sin');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Sin');\r\nexports.page.p(`\r\nReturns the sine value of an angle. (radian)\r\n`);\r\nexports.page.code(`\r\nfloat Sin(float radian)\r\n---\r\ndouble Sin(double radian)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Sin.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Sqrt.ts":
/*!*****************************************!*\
  !*** ./src/pages/EasyToolset/e/Sqrt.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Sqrt');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Sqrt');\r\nexports.page.p(`\r\nReturns the square root of the value.\r\n`);\r\nexports.page.code(`\r\nfloat Sqrt(float value)\r\n---\r\ndouble Sqrt(double value)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Sqrt.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/StopFollower.ts":
/*!*************************************************!*\
  !*** ./src/pages/EasyToolset/e/StopFollower.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/StopFollower');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.StopFollower');\r\nexports.page.p(`\r\nStops following behaviour that starts with 'Follow'.\r\n`);\r\nexports.page.code(`\r\nvoid StopFollower(Transform follower)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/StopFollower.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/StopTimer.ts":
/*!**********************************************!*\
  !*** ./src/pages/EasyToolset/e/StopTimer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/StopTimer');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.StopTimer');\r\nexports.page.p(`\r\nStops the timer that started by SetTimeout or SetInterval.\r\n`);\r\nexports.page.code(`\r\nvoid StopTimer(int id)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/StopTimer.ts?");

/***/ }),

/***/ "./src/pages/EasyToolset/e/Tan.ts":
/*!****************************************!*\
  !*** ./src/pages/EasyToolset/e/Tan.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.page = void 0;\r\nconst page_1 = __webpack_require__(/*! modules/page */ \"./src/modules/page/index.ts\");\r\nexports.page = new page_1.Page('Documentation/EasyToolset/e/Tan');\r\nexports.page.setAsMember();\r\nexports.page.h1('e.Tan');\r\nexports.page.p(`\r\nReturns the tangent value of an angle. (radian)\r\n`);\r\nexports.page.code(`\r\nfloat Tan(float radian)\r\n---\r\ndouble Tan(double radian)\r\n`);\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/EasyToolset/e/Tan.ts?");

/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.pages = void 0;\r\nexports.pages = [\r\n    (__webpack_require__(/*! ./About/QuickStart */ \"./src/pages/About/QuickStart.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset */ \"./src/pages/EasyToolset.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/AudioPlayer */ \"./src/pages/EasyToolset/AudioPlayer.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/AudioPlayer/volume */ \"./src/pages/EasyToolset/AudioPlayer/volume.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/AudioPlayer/mute */ \"./src/pages/EasyToolset/AudioPlayer/mute.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/AudioPlayer/output */ \"./src/pages/EasyToolset/AudioPlayer/output.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/AudioPlayer/Play */ \"./src/pages/EasyToolset/AudioPlayer/Play.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/AudioPlayer/Stop */ \"./src/pages/EasyToolset/AudioPlayer/Stop.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/AudioPlayer/ToggleMute */ \"./src/pages/EasyToolset/AudioPlayer/ToggleMute.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e */ \"./src/pages/EasyToolset/e.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Play */ \"./src/pages/EasyToolset/e/Play.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/On */ \"./src/pages/EasyToolset/e/On.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Once */ \"./src/pages/EasyToolset/e/Once.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Off */ \"./src/pages/EasyToolset/e/Off.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Emit */ \"./src/pages/EasyToolset/e/Emit.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Follow */ \"./src/pages/EasyToolset/e/Follow.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/StopFollower */ \"./src/pages/EasyToolset/e/StopFollower.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Radian */ \"./src/pages/EasyToolset/e/Radian.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Degree */ \"./src/pages/EasyToolset/e/Degree.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Sin */ \"./src/pages/EasyToolset/e/Sin.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Cos */ \"./src/pages/EasyToolset/e/Cos.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Tan */ \"./src/pages/EasyToolset/e/Tan.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Asin */ \"./src/pages/EasyToolset/e/Asin.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Acos */ \"./src/pages/EasyToolset/e/Acos.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Atan */ \"./src/pages/EasyToolset/e/Atan.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Abs */ \"./src/pages/EasyToolset/e/Abs.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Clamp */ \"./src/pages/EasyToolset/e/Clamp.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Clamp01 */ \"./src/pages/EasyToolset/e/Clamp01.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Lerp */ \"./src/pages/EasyToolset/e/Lerp.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/LerpUnclamped */ \"./src/pages/EasyToolset/e/LerpUnclamped.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Min */ \"./src/pages/EasyToolset/e/Min.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Max */ \"./src/pages/EasyToolset/e/Max.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Floor */ \"./src/pages/EasyToolset/e/Floor.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Ceiling */ \"./src/pages/EasyToolset/e/Ceiling.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Round */ \"./src/pages/EasyToolset/e/Round.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Sign */ \"./src/pages/EasyToolset/e/Sign.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Sqrt */ \"./src/pages/EasyToolset/e/Sqrt.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/Pow */ \"./src/pages/EasyToolset/e/Pow.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/RandomBool */ \"./src/pages/EasyToolset/e/RandomBool.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/RandomInt */ \"./src/pages/EasyToolset/e/RandomInt.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/RandomFloat */ \"./src/pages/EasyToolset/e/RandomFloat.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/RandomDouble */ \"./src/pages/EasyToolset/e/RandomDouble.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/RandomElement */ \"./src/pages/EasyToolset/e/RandomElement.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/RandomVector2 */ \"./src/pages/EasyToolset/e/RandomVector2.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/RandomVector3 */ \"./src/pages/EasyToolset/e/RandomVector3.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/RandomColor */ \"./src/pages/EasyToolset/e/RandomColor.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/SetTimeout */ \"./src/pages/EasyToolset/e/SetTimeout.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/SetInterval */ \"./src/pages/EasyToolset/e/SetInterval.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/e/StopTimer */ \"./src/pages/EasyToolset/e/StopTimer.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI */ \"./src/pages/EasyToolset/eGUI.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Indent */ \"./src/pages/EasyToolset/eGUI/Indent.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/LabelWidth */ \"./src/pages/EasyToolset/eGUI/LabelWidth.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Horizontal */ \"./src/pages/EasyToolset/eGUI/Horizontal.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Vertical */ \"./src/pages/EasyToolset/eGUI/Vertical.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Box */ \"./src/pages/EasyToolset/eGUI/Box.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Foldout */ \"./src/pages/EasyToolset/eGUI/Foldout.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Show */ \"./src/pages/EasyToolset/eGUI/Show.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Hide */ \"./src/pages/EasyToolset/eGUI/Hide.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Enable */ \"./src/pages/EasyToolset/eGUI/Enable.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Disable */ \"./src/pages/EasyToolset/eGUI/Disable.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Space */ \"./src/pages/EasyToolset/eGUI/Space.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Line */ \"./src/pages/EasyToolset/eGUI/Line.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Header */ \"./src/pages/EasyToolset/eGUI/Header.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Paragraph */ \"./src/pages/EasyToolset/eGUI/Paragraph.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Link */ \"./src/pages/EasyToolset/eGUI/Link.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Button */ \"./src/pages/EasyToolset/eGUI/Button.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Prefix */ \"./src/pages/EasyToolset/eGUI/Prefix.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Label */ \"./src/pages/EasyToolset/eGUI/Label.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Message */ \"./src/pages/EasyToolset/eGUI/Message.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Info */ \"./src/pages/EasyToolset/eGUI/Info.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Warning */ \"./src/pages/EasyToolset/eGUI/Warning.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Error */ \"./src/pages/EasyToolset/eGUI/Error.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/DefaultInspector */ \"./src/pages/EasyToolset/eGUI/DefaultInspector.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Property */ \"./src/pages/EasyToolset/eGUI/Property.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Toggle */ \"./src/pages/EasyToolset/eGUI/Toggle.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/ToggleLeft */ \"./src/pages/EasyToolset/eGUI/ToggleLeft.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/ToggleSwitch */ \"./src/pages/EasyToolset/eGUI/ToggleSwitch.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Int */ \"./src/pages/EasyToolset/eGUI/Int.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Long */ \"./src/pages/EasyToolset/eGUI/Long.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Float */ \"./src/pages/EasyToolset/eGUI/Float.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Double */ \"./src/pages/EasyToolset/eGUI/Double.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Slider */ \"./src/pages/EasyToolset/eGUI/Slider.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Text */ \"./src/pages/EasyToolset/eGUI/Text.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/TextArea */ \"./src/pages/EasyToolset/eGUI/TextArea.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Password */ \"./src/pages/EasyToolset/eGUI/Password.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Object */ \"./src/pages/EasyToolset/eGUI/Object.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Enum */ \"./src/pages/EasyToolset/eGUI/Enum.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Flags */ \"./src/pages/EasyToolset/eGUI/Flags.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Vector2 */ \"./src/pages/EasyToolset/eGUI/Vector2.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Vector2Int */ \"./src/pages/EasyToolset/eGUI/Vector2Int.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Vector3 */ \"./src/pages/EasyToolset/eGUI/Vector3.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Vector3Int */ \"./src/pages/EasyToolset/eGUI/Vector3Int.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Vector4 */ \"./src/pages/EasyToolset/eGUI/Vector4.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Color */ \"./src/pages/EasyToolset/eGUI/Color.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Tag */ \"./src/pages/EasyToolset/eGUI/Tag.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/Layer */ \"./src/pages/EasyToolset/eGUI/Layer.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/SortingLayer */ \"./src/pages/EasyToolset/eGUI/SortingLayer.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/eGUI/ProgressBar */ \"./src/pages/EasyToolset/eGUI/ProgressBar.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/EasyBehaviour */ \"./src/pages/EasyToolset/EasyBehaviour.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/EasyInspectorAttribute */ \"./src/pages/EasyToolset/EasyInspectorAttribute.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/EasyInspectorAttribute/EasyInspectorAttribute */ \"./src/pages/EasyToolset/EasyInspectorAttribute/EasyInspectorAttribute.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/EasyInspectorAttribute/methodName */ \"./src/pages/EasyToolset/EasyInspectorAttribute/methodName.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/EasyInspectorAttribute/canEditMultipleObjects */ \"./src/pages/EasyToolset/EasyInspectorAttribute/canEditMultipleObjects.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents */ \"./src/pages/EasyToolset/GameEvents.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents/On */ \"./src/pages/EasyToolset/GameEvents/On.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents/Once */ \"./src/pages/EasyToolset/GameEvents/Once.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents/Off */ \"./src/pages/EasyToolset/GameEvents/Off.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents/Emit */ \"./src/pages/EasyToolset/GameEvents/Emit.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents/Clear */ \"./src/pages/EasyToolset/GameEvents/Clear.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents/Reset */ \"./src/pages/EasyToolset/GameEvents/Reset.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents/GetNames */ \"./src/pages/EasyToolset/GameEvents/GetNames.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents/GetListenerCount */ \"./src/pages/EasyToolset/GameEvents/GetListenerCount.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/GameEvents/eventCount */ \"./src/pages/EasyToolset/GameEvents/eventCount.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig */ \"./src/pages/EasyToolset/Editor/IConfig.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Label */ \"./src/pages/EasyToolset/Editor/IConfig/Label.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/EmptyLabel */ \"./src/pages/EasyToolset/Editor/IConfig/EmptyLabel.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/RemoveLabel */ \"./src/pages/EasyToolset/Editor/IConfig/RemoveLabel.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Tooltip */ \"./src/pages/EasyToolset/Editor/IConfig/Tooltip.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Wide */ \"./src/pages/EasyToolset/Editor/IConfig/Wide.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/LabelWidth */ \"./src/pages/EasyToolset/Editor/IConfig/LabelWidth.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/LayoutOptions */ \"./src/pages/EasyToolset/Editor/IConfig/LayoutOptions.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Bold */ \"./src/pages/EasyToolset/Editor/IConfig/Bold.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Italic */ \"./src/pages/EasyToolset/Editor/IConfig/Italic.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/FontStyle */ \"./src/pages/EasyToolset/Editor/IConfig/FontStyle.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/RichText */ \"./src/pages/EasyToolset/Editor/IConfig/RichText.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Show */ \"./src/pages/EasyToolset/Editor/IConfig/Show.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Hide */ \"./src/pages/EasyToolset/Editor/IConfig/Hide.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Enable */ \"./src/pages/EasyToolset/Editor/IConfig/Enable.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Disable */ \"./src/pages/EasyToolset/Editor/IConfig/Disable.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/HideScriptReference */ \"./src/pages/EasyToolset/Editor/IConfig/HideScriptReference.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Exclude */ \"./src/pages/EasyToolset/Editor/IConfig/Exclude.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/OnChange */ \"./src/pages/EasyToolset/Editor/IConfig/OnChange.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Readonly */ \"./src/pages/EasyToolset/Editor/IConfig/Readonly.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/AllowEdit */ \"./src/pages/EasyToolset/Editor/IConfig/AllowEdit.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Min */ \"./src/pages/EasyToolset/Editor/IConfig/Min.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Max */ \"./src/pages/EasyToolset/Editor/IConfig/Max.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Range */ \"./src/pages/EasyToolset/Editor/IConfig/Range.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/Delayed */ \"./src/pages/EasyToolset/Editor/IConfig/Delayed.ts\").page),\r\n    (__webpack_require__(/*! ./EasyToolset/Editor/IConfig/AssetOnly */ \"./src/pages/EasyToolset/Editor/IConfig/AssetOnly.ts\").page),\r\n];\r\n\n\n//# sourceURL=webpack://Easy_Toolset_Documentation/./src/pages/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/entry.ts");
/******/ 	
/******/ })()
;