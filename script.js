document.getElementById('toggleShelf').addEventListener('click', function() {
    var unbalancedShelf = document.getElementById('unbalancedShelf');
    var balancedShelf = document.getElementById('balancedShelf');
    unbalancedShelf.classList.toggle('hidden');
    balancedShelf.classList.toggle('hidden');
});

function updateIframe() {
    var htmlContent = document.getElementById('html-editor').value;
    var cssContent = "<style>" + document.getElementById('css-editor').value + "</style>";
    var iframe = document.getElementById('output-window');

    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(htmlContent + cssContent);
    iframeDoc.close();
}

document.getElementById('run').addEventListener('click', updateIframe);
