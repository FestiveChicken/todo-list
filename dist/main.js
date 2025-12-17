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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body, html {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0px;\r\n}\r\n\r\n#content {\r\n    background-color: rgba(0, 0, 0, 0.26);\r\n    height: 500px;\r\n    width: 500px;\r\n    display:grid;\r\n    grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n#projects {\r\n    background-color: aqua;\r\n    margin: 20px;\r\n}\r\n\r\n#todo {\r\n    background-color: blueviolet;\r\n    margin: 20px;\r\n}\r\n\r\n#background {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    -webkit-backdrop-filter: blur(10px);\r\n    backdrop-filter: blur(10px);\r\n    height: 100%;\r\n    width: 100vw;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#holder {\r\n    background-color: white;\r\n    width: 50%;\r\n    border: 3px solid green;\r\n    padding: 10px;\r\n}\r\n\r\n.todoCard {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/DOM.js"
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearTodo: () => (/* binding */ clearTodo),\n/* harmony export */   newProjectButton: () => (/* binding */ newProjectButton),\n/* harmony export */   newProjectCard: () => (/* binding */ newProjectCard),\n/* harmony export */   newTodoButton: () => (/* binding */ newTodoButton),\n/* harmony export */   newTodoCard: () => (/* binding */ newTodoCard)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n//Creates a new project card\r\nconst newProjectCard = (name) => {\r\n    const projects = document.getElementById('projects')\r\n    const projectCard = document.createElement('button')\r\n    const projectEdit = document.createElement('button')\r\n    const projectDelete = document.createElement('button')\r\n    const heading = document.createElement('h1')\r\n\r\n    projectCard.setAttribute('id', name)\r\n    heading.setAttribute('id', name+'-heading')\r\n    heading.textContent = name\r\n    projectEdit.textContent = 'Edit'\r\n    projectEdit.setAttribute('class', 'edit')\r\n    projectDelete.textContent = 'Delete'\r\n    projectDelete.setAttribute('class', 'delete')\r\n    \r\n    projects.appendChild(projectCard)\r\n    projectCard.appendChild(heading)\r\n    projectCard.appendChild(projectEdit)\r\n    projectCard.appendChild(projectDelete)\r\n\r\n    projectEdit.addEventListener('click', editProject)\r\n    projectDelete.addEventListener('click', deleteProject)\r\n}\r\n\r\n//New project button\r\nconst newProjectButton = (eventType) => {\r\n    const projectButton = document.getElementById('projectButton') \r\n    const projectDialog = document.getElementById('projectDialog')\r\n    const projectConfirmButton = document.getElementById('projectConfirmButton')\r\n    const projectForm = document.getElementById('projectForm')\r\n\r\n    projectButton.addEventListener(eventType, () => {\r\n        projectForm.reset()\r\n        projectDialog.showModal()\r\n    })\r\n\r\n    projectConfirmButton.addEventListener(eventType, (e) => {\r\n        e.preventDefault()\r\n        let projectName = document.getElementById('projectName').value\r\n        new _createProject__WEBPACK_IMPORTED_MODULE_0__.createProject(projectName)\r\n        projectForm.reset()\r\n        projectDialog.close()\r\n    })\r\n}\r\n\r\n//Deletes project\r\nconst deleteProject = (e) => {\r\n    e = e.target\r\n    if (e.nodeName === 'BUTTON') {\r\n        const projects = document.getElementById('projects')\r\n        const parent = document.getElementById(e.parentNode.id)\r\n        projects.removeChild(parent)\r\n    }\r\n\r\n}\r\n\r\n//Edit project name\r\nconst editProject = (e) => {\r\n    e = e.target\r\n\r\n    //Creating input box\r\n    const content = document.getElementById('content')\r\n    const background = document.createElement('div')\r\n    const holder = document.createElement('div')\r\n    const newName = document.createElement('h3')\r\n    const inputText = document.createElement('input')\r\n    const confirmButton = document.createElement('button')\r\n    const cancelButton = document.createElement('button')\r\n\r\n    background.setAttribute('id', 'background')\r\n    holder.setAttribute('id', 'holder')\r\n    newName.innerText = 'New Project Name?'\r\n    inputText.type = 'text'\r\n    confirmButton.innerText = 'Confirm'\r\n    cancelButton.innerText = 'Cancel'\r\n\r\n    content.appendChild(background)\r\n    background.appendChild(holder)\r\n    holder.appendChild(newName)\r\n    holder.appendChild(inputText)\r\n    holder.appendChild(confirmButton)\r\n    holder.appendChild(cancelButton)\r\n\r\n    //Changes project name if clicked\r\n    confirmButton.addEventListener('click', () => {\r\n        if (e.nodeName === 'BUTTON') {\r\n            const heading = document.getElementById(e.parentNode.id+'-heading')\r\n            heading.innerText = inputText.value\r\n            content.removeChild(background)\r\n        }\r\n    })\r\n\r\n    //Ignores changes\r\n    cancelButton.addEventListener('click', () => {\r\n        content.removeChild(background)\r\n    })\r\n    \r\n    \r\n}\r\n//Creates a new todo card\r\nconst newTodoCard = (name, dueDate) => {\r\n    const todo = document.getElementById('todo')\r\n    const todoCard = document.createElement('div')\r\n    const todoName = document.createElement ('p')\r\n    const todoDate = document.createElement('p')\r\n    const checkbox = document.createElement('input')\r\n    const todoEdit = document.createElement('button')\r\n    const todoDelete = document.createElement('button')\r\n\r\n    todoCard.setAttribute('id', name)\r\n    todoCard.setAttribute('class', 'todoCard')\r\n    todoDate.setAttribute('class', dueDate)\r\n    todoName.textContent = name\r\n    todoDate.textContent = dueDate\r\n    checkbox.type = 'checkbox'\r\n    todoEdit.textContent = 'Edit'\r\n    todoEdit.setAttribute('class', 'edit')\r\n    todoDelete.textContent = 'Delete'\r\n    todoDelete.setAttribute('class', 'delete')\r\n\r\n    todoName.style.margin = '10px'\r\n    todoDate.style.margin = '10px'\r\n    checkbox.style.margin = '10px'\r\n\r\n    todo.appendChild(todoCard)\r\n    todoCard.appendChild(todoName)\r\n    todoCard.appendChild(todoDate)\r\n    todoCard.appendChild(todoEdit)\r\n    todoCard.appendChild(todoDelete)\r\n    todoCard.appendChild(checkbox)\r\n\r\n    todoEdit.addEventListener('click', editTodo)\r\n    todoDelete.addEventListener('click', deleteTodo)\r\n}\r\n\r\n//New todo button\r\nconst newTodoButton = (eventType) => {\r\n    const todoButton = document.getElementById('todoButton') \r\n    const todoDialog = document.getElementById('todoDialog')\r\n    const todoConfirmButton = document.getElementById('todoConfirmButton')\r\n    const todoForm = document.getElementById('todoForm')\r\n\r\n    todoButton.addEventListener(eventType, () => {\r\n        todoForm.reset()\r\n        todoDialog.showModal()\r\n    })\r\n\r\n    todoConfirmButton.addEventListener(eventType, (e) => {\r\n        e.preventDefault()\r\n        let todoName = document.getElementById('todoName').value\r\n        let todoDescription = document.getElementById('todoDescription').value\r\n        let todoDueDate = document.getElementById('todoDueDate').value\r\n        let todoPriority = document.getElementById('todoPriority').value\r\n        let todoNotes = document.getElementById('todoNotes').value\r\n        new _createTodo__WEBPACK_IMPORTED_MODULE_1__.createTodo(todoName, todoDescription, todoDueDate, todoPriority, todoNotes)\r\n        todoForm.reset()\r\n        todoDialog.close()\r\n    })\r\n}\r\n\r\n//Deletes todo\r\nconst deleteTodo = (e) => {\r\n    e = e.target\r\n    if (e.nodeName === 'BUTTON') {\r\n        const todo = document.getElementById('todo')\r\n        const parent = document.getElementById(e.parentNode.id)\r\n        todo.removeChild(parent)\r\n    }\r\n\r\n}\r\n\r\n//NEEDS EDIT\r\nconst editTodo = (e) => {\r\n    e = e.target\r\n\r\n    //Creating input box\r\n    const content = document.getElementById('content')\r\n    const background = document.createElement('div')\r\n    const holder = document.createElement('div')\r\n    const newName = document.createElement('h3')\r\n    const inputText = document.createElement('input')\r\n    const confirmButton = document.createElement('button')\r\n    const cancelButton = document.createElement('button')\r\n\r\n    background.setAttribute('id', 'background')\r\n    holder.setAttribute('id', 'holder')\r\n    newName.innerText = 'New Todo Name?'\r\n    inputText.type = 'text'\r\n    confirmButton.innerText = 'Confirm'\r\n    cancelButton.innerText = 'Cancel'\r\n\r\n    content.appendChild(background)\r\n    background.appendChild(holder)\r\n    holder.appendChild(newName)\r\n    holder.appendChild(inputText)\r\n    holder.appendChild(confirmButton)\r\n    holder.appendChild(cancelButton)\r\n\r\n    //Changes project name if clicked\r\n    confirmButton.addEventListener('click', () => {\r\n        if (e.nodeName === 'BUTTON') {\r\n            const heading = document.getElementById(e.parentNode.id)\r\n            heading.innerText = inputText.value\r\n            content.removeChild(background)\r\n        }\r\n    })\r\n\r\n    //Ignores changes\r\n    cancelButton.addEventListener('click', () => {\r\n        content.removeChild(background)\r\n    })\r\n}\r\n\r\n//Clears todo list\r\n//NEEDS EDIT\r\nconst clearTodo = (eventType) => {\r\n    const todoCards = document.querySelectorAll('.todoCard')\r\n    const todo = document.getElementById('todo')\r\n    test.addEventListener(eventType, () => {\r\n        todo.removeChild(todoCards[0])\r\n    })\r\n        \r\n}\r\n\r\n//NEEDS EDIT\r\n//Load project and todo items \r\nconst loadProject = () => {\r\n    const projectButton = document.getElementById('projectButton') \r\n    const projectDialog = document.getElementById('projectDialog')\r\n    const projectConfirmButton = document.getElementById('projectConfirmButton')\r\n    const projectForm = document.getElementById('projectForm')\r\n\r\n    projectButton.addEventListener(eventType, () => {\r\n        projectForm.reset()\r\n        projectDialog.showModal()\r\n    })\r\n\r\n    projectConfirmButton.addEventListener(eventType, (e) => {\r\n        e.preventDefault()\r\n        let projectName = document.getElementById('projectName').value\r\n        new _createProject__WEBPACK_IMPORTED_MODULE_0__.createProject(projectName)\r\n        projectForm.reset()\r\n        projectDialog.close()\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?\n}");

/***/ },

/***/ "./src/createProject.js"
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\r\nclass createProject {\r\n    constructor (name, todoArray = []) {\r\n        this.todoArray = todoArray\r\n        this.name = name\r\n        ;(0,_DOM__WEBPACK_IMPORTED_MODULE_0__.newProjectCard)(name)\r\n    }\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?\n}");

/***/ },

/***/ "./src/createTodo.js"
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\r\n//Add select project logic\r\n\r\nclass createTodo {\r\n    constructor(title, description, dueDate, priority, notes) {\r\n        this.title = title\r\n        this.description = description\r\n        this.dueDate = dueDate\r\n        this.priority = priority\r\n        this.notes = notes\r\n        ;(0,_DOM__WEBPACK_IMPORTED_MODULE_0__.newTodoCard)(title, dueDate)\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/createTodo.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\nconsole.log('hello world')\r\n\r\n;(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.newProjectButton)('click')\r\n;(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.newTodoButton)('click')\r\n;(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearTodo)('click')\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;