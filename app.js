// Basic interactions if needed
const modelViewer = document.querySelector('#astronaut-viewer');

modelViewer.addEventListener('ar-status', (event) => {
    if (event.detail.status === 'failed') {
        console.error('AR session failed to start');
    }
});

console.log('Model Viewer application initialized');
