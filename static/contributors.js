(async function() {
    const res = await fetch('http://contributors.nucleoid.xyz/widget.html');
    if (!res.ok) console.error('failed to load contributors!');
    const html = await res.text();
    const ele = document.getElementById('contributors');
    ele.innerHTML = html;
    ele.classList.remove('loading');
})();
