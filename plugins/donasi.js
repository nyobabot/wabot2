let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [089635867363]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [089635867363]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
