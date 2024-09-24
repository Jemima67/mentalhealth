modalOverlay = document.querySelector('#overlay');
onboardingDetailModal = document.querySelector('#onboardingDetailModal');
referalDetailModal = document.querySelector('#referalDetailModal');


function openModal() {
  modalOverlay.style.display = 'block';
  onboardingDetailModal.style.display = 'block';
}

function openReferalModal() {
  modalOverlay.style.display = 'block';
  referalDetailModal.style.display = 'block';
}

function clossModal() {
  modalOverlay.style.display = 'none';
  onboardingDetailModal.style.display = 'none';
  referalDetailModal.style.display = 'none';
}