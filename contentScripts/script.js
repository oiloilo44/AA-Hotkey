document.addEventListener('keydown', function (e) {
    e = e || window.event;
    let tmp
    // Run from here
    if (e.altKey && (e.key === 'r' || e.key === 'R')) {
        tmp = document.querySelector('div.taskbotlistnode-title--cursor-pivot button').click()
        tmp = setTimeout(function () {
            document.querySelector('div.popup--show button[name=action-node-run-from]').click()
        }, 100)

        // Expand/Collapse All
    } else if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        let css = 'div[class=taskbotlistnode-collapser]'
        if (document.querySelector(css) == null)
            css = 'div.taskbotlistnode-collapser--collapsed'

        while (true) {
            var collapser = document.querySelector(css)
            if (collapser == null)
                break
            collapser.click()
        }

        // Go to First node
    } else if (e.altKey && (e.key === 'w' || e.key === 'W')) {
        tmp = document.querySelector('div.taskbotlistnode-title--cursor').closest('div.taskbotlistnode--mode-edit').parentElement.querySelector('div.taskbotlistnode-title').click()

        // Go to Last node
    } else if (e.altKey && (e.key === 's' || e.key === 'S')) {
        let lastNode = document.querySelector('div.taskbotlistnode-title--cursor').closest('div.taskbotlistnode--mode-edit').parentElement.lastChild.querySelector('div.taskbotlistnode-title')
        if (lastNode == null)
            lastNode = document.querySelector('div.taskbotlistnode-title--cursor').closest('div.taskbotlistnode--mode-edit').parentElement.lastChild.previousSibling.querySelector('div.taskbotlistnode-title')
        lastNode.click()

        // Uncheck all properties
    } else if (e.altKey && (e.key === 'q' || e.key === 'Q')) {
        document.querySelector("div.editordetails span.fa-caret-right").click()
        tmp = document.querySelectorAll("div.editordetails div.taskbotpropertiesfield div[aria-checked='true']")
        for (var check of tmp) {
            check.click()
        }
    }
});