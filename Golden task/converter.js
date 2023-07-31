
function convertFile() {
  const fileInput = document.getElementById('fileInput');
  const progressBarContainer = document.getElementById('progressBarContainer');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const errorContainer = document.getElementById('errorContainer');
  const downloadLink = document.getElementById('downloadLink');

  progressBarContainer.style.display = 'flex';
  errorContainer.textContent = '';
  downloadLink.style.display = 'none';

  const file = fileInput.files[0];
  const conversionOptions = document.getElementById('conversionOptions').value;

  if (!file) {
    errorContainer.textContent = 'Please select a file.';
    progressBarContainer.style.display = 'none';
    return;
  }


  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += 5;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(progressInterval);
      progressBarContainer.style.display = 'none';
      downloadLink.style.display = 'block';
    }
  }, 200);
}
