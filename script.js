// Simple script for the example page
document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('greet');
	const msg = document.getElementById('message');

	if (!btn || !msg) return;

	btn.addEventListener('click', () => {
		const now = new Date();
		msg.textContent = `Hello — you clicked the button! (${now.toLocaleTimeString()})`;
		btn.setAttribute('aria-pressed', 'true');
		// briefly return focus to the button for keyboard users
		setTimeout(() => btn.focus(), 150);
	});
});

