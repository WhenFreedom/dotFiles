vim.opt.number = true
vim.opt.clipboard = 'unnamedplus'
vim.opt.mouse = "a"
vim.opt.showmode = false
vim.showtabline = 2
vim.opt.smartcase = true
vim.opt.smartindent = true
vim.opt.shiftwidth = 2
vim.opt.tabstop = 2
vim.opt.cursorline = true
vim.opt.expandtab = true

vim.cmd("au BufReadPost sxhkdrc set syntax=dosini")
