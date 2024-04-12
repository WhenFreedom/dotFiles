return {
	"williamboman/mason.nvim",
	dependencies = {
		"williamboman/mason-lspconfig.nvim",
		"neovim/nvim-lspconfig",
		"onsails/lspkind.nvim",
	},
	config = function ()
		local lspconfig = require("lspconfig")
		
		require("mason").setup()
		require("mason-lspconfig").setup({
			ensure_installed = { "lua_ls", "bashls", "cssls", "pylsp" }
	})
		lspconfig.lua_ls.setup({
			settings = {
				Lua = {
					runtime = {
						version = "LuaJIT",
					},
					diagnostics = {
						globals = { "vim" },
					},
					workspace = {
						library = vim.api.nvim_get_runtime_file("", true),
					},
					telemetry = {
						enable = false,
					},
				},
			},
		})

		lspconfig.bashls.setup{}
		lspconfig.cssls.setup{}
		lspconfig.pylsp.setup{}

		require("lspkind").init({
			mode = 'symbol_text',
			preset = 'default'
		})
	end
}



