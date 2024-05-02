const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectedItem(e) {
   // Remove the show class
   removeShow();

   // Remove the background
   removeBg();

   this.classList.add('redBg');

   // Grab tab content item from the DOM
   const tabContentItem = document.querySelector(`#${this.id}-content`);
   tabContentItem.classList.add('show');
}

function removeBg() {
   tabItems.forEach((item) => {
      item.classList.remove('redBg');
   });
}

function removeShow() {
   tabContentItems.forEach((item) => {
      item.classList.remove('show');
   });
}

// Listen for tab item click
tabItems.forEach((tab) => {
   tab.addEventListener('click', selectedItem);
});s