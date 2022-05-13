export const validation = () => {
    const form = document.querySelectorAll('.form-horizontal');
    form.forEach(forms => {
        forms.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
};