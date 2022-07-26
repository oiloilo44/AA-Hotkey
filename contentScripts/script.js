document.addEventListener('keydown', function (e) {
    let url = window.location.href
    let editChk = url.includes('bots/repository/private/taskbots') && url.includes('edit')

    e = e || window.event;

    if (editChk) { //
        if (e.altKey && (e.key === 't' || e.key === 'T')) {
            // Run
            run();

        } else if (e.altKey && (e.key === 'r' || e.key === 'R')) {
            // Run from here
            runFromHere();

        } else if (e.altKey && (e.key === 'a' || e.key === 'A')) {
            // Expand/Collapse All
            expendCollapseAll();

        } else if (e.altKey && (e.key === 'w' || e.key === 'W')) {
            // Go to the First node
            goToTheFirstNode();

        } else if (e.altKey && (e.key === 's' || e.key === 'S')) {
            // Go to the Last node
            goToTheLastNode();

        } else if (e.altKey && (e.key === 'q' || e.key === 'Q')) {
            // Check only XPath
            checkOnlyXpath();
        }
    }
});


function run() {
    document.querySelector("button[name='run']").click()
}

function runFromHere() {
    document.querySelector('div.taskbotlistnode-title--cursor-pivot button').click()
    setTimeout(function () {
        document.querySelector('div.popup--show button[name=action-node-run-from]').click()
    }, 100)
}

function expendCollapseAll() {
    let css = 'div[class=taskbotlistnode-collapser]'
    if (document.querySelector(css) == null)
        css = 'div.taskbotlistnode-collapser--collapsed'

    while (true) {
        let collapser = document.querySelector(css)
        if (collapser == null)
            break
        collapser.click()
    }
}

function goToTheFirstNode() {
    document.querySelector('div.taskbotlistnode-title--cursor').closest('div.taskbotlistnode--mode-edit').parentElement.querySelector('div.taskbotlistnode-title').click()
}

function goToTheLastNode() {
    let lastNode = document.querySelector('div.taskbotlistnode-title--cursor').closest('div.taskbotlistnode--mode-edit').parentElement.lastChild.querySelector('div.taskbotlistnode-title')
    if (lastNode == null)
        lastNode = document.querySelector('div.taskbotlistnode-title--cursor').closest('div.taskbotlistnode--mode-edit').parentElement.lastChild.previousSibling.querySelector('div.taskbotlistnode-title')
    lastNode.click()
}

function checkOnlyXpath() {
    let tmp = document.querySelector("div.editordetails span.fa-caret-right")
    if (tmp != null)
        tmp.click()

    let checked = document.querySelectorAll("div.editordetails div.taskbotpropertiesfield div[aria-checked='true']")
    for (let check of checked) {
        check.click()
    }
    document.querySelector("div[title='DOMXPath']").parentElement.parentElement.querySelector("span").click()
    document.querySelector('div.fieldlabelcontainer-label > span.fa-caret-down').click()
}