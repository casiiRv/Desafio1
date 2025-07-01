document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('register-form');
  const avatarUpload = document.getElementById('avatar-upload');
  const avatarPreview = document.getElementById('upload-preview');

  let uploadedImage = "";

  avatarUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.size < 512000) {
      const reader = new FileReader();
      reader.onload = () => {
        uploadedImage = reader.result;
        avatarPreview.textContent = "Image uploaded!";
      };
      reader.readAsDataURL(file);
    } else {
      alert("Image must be JPG/PNG and smaller than 500KB.");
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const github = document.getElementById('github').value;

    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('ticket-container').classList.remove('hidden');

    document.getElementById('name-output').textContent = name;
    document.getElementById('email-output').textContent = email;
    document.getElementById('user-output').textContent = name;
    document.getElementById('handle-output').textContent = '@' + github;

    const avatarOut = document.getElementById('avatar-output');
    avatarOut.src = uploadedImage || 'https://via.placeholder.com/50';
  });
});

