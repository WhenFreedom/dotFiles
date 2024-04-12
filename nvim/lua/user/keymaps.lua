local opts = { noremap = true, silent = true }

local term_opts = { silent = true }

local keymap = vim.api.nvim_set_keymap

--Normal--
--Set Leader Key--
keymap("", "<Space>", "<Nop>", opts)
vim.g.mapleader = " "
vim.g.maplocalleader = " "

--Window Navigation--
keymap("n", "<C-Left>", "<C-w>h", opts)
keymap("n", "<C-Down>", "<C-w>j", opts)
keymap("n", "<C-Up>",		"<C-w>k", opts)
keymap("n", "<C-Right>", "<C-w>l", opts)

--Resize Windows--
keymap("n", "<S-Left>", ":vertical resize -2<CR>", opts)
keymap("n", "<S-Right>", ":vertical resize +2<CR>", opts)
keymap("n", "<S-Up>", ":resize +2<CR>", opts)
keymap("n", "<S-Down>", ":resize -2<CR>", opts)

--Navigate Buffers--
keymap("n", "<C-S-Right>", ":bnext<CR>", opts)
keymap("n", "C-S-Left>", ":bprevious<CR>", opts)

--Undo/Redo--
keymap("n", "<leader>z", ":undo<cr>", opts)
keymap("n", "<leader>y", ":redo<cr>", opts)

--Visual--
--Indent Mode--
keymap("v", "<A-Up>", ":m .+1<CR>", opts)
keymap("v", "<A-Down>", ":m .-1<CR>", opts)

--Tab Manipulation--
keymap("n", "C-c", ":tabclose<CR>", opts)
keymap("i", "C-c", ":tabclose<CR>", opts)

--Explorer--
keymap("n", "<leader>e", ":NvimTreeToggle<cr>", opts)
