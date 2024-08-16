const MODAL_TRANSITION_DURATION = 400;
const FORM_TRANSITION_DURATION = 500;

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modalForm = modal.querySelector(".modal__form");
  const modalClose = modal.querySelector(".modal__form-close");
  const triggers = document.querySelectorAll(".init-modal");
  const errorMessage = document.querySelector('.error-message');
  // Toogle actions for Modal
  {
    const closeModal = () => {
      modalForm.classList.remove("active");
      document.body.style.overflow = "unset";
      setTimeout(() => {
        modal.classList.remove("active");
      }, MODAL_TRANSITION_DURATION);
      setTimeout(() => {
        modalForm.classList.remove("sended");
      }, MODAL_TRANSITION_DURATION * 2);
    };

    const openModal = () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        modalForm.classList.add("active");
      }, FORM_TRANSITION_DURATION);
    };

    triggers.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
      });
    });

    modalClose.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
      const target = e.target.closest(".modal__form");
      if (!target) {
        closeModal();
      }
    });
  }

  // Send action from form
  {
    const form = document.getElementById("modalForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const formEntries = Object.fromEntries(formData.entries());

      if (!formEntries.name.trim()) {
        errorMessage.textContent = "Please enter your name.";
        errorMessage.style.display = "flex";
        return;
      }

      if (!formEntries.telegram.trim() && !formEntries.whatsapp.trim()) {
        errorMessage.textContent = "Please provide either Telegram or WhatsApp contact.";
        errorMessage.style.display = "flex";
        return;
      }

      const botToken = "test";
      const chatId = "@test";
      const text = `Name: ${formEntries.name}\nTelegram: ${formEntries.telegram}\nWhatsapp: ${formEntries.whatsapp}`;

      const isSend = sendMessage(botToken, chatId, text);
      if (isSend) {
        errorMessage.style.display = "none";
        modalForm.classList.add("sended");
        form.reset();
      };
    });
  }
});

async function sendMessage(botToken, chatId, text) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    data.ok ? true : false;
  } catch (error) {
    console.error(error);
    return false;
  }
}
