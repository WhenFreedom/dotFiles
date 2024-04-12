return {
	"nvim-treesitter/nvim-treesitter",
	build = ":TSUpdate",
	config = function ()
		local configs = require("nvim-treesitter.configs")

		configs.setup({
			ensure_installed = { "lua", "toml", "typescript", "regex", "css", "awk", "bash", "rasi", "python", "yuck" },
			auto_install = { enable = true },
			ignore_install = { "" },
			sync_install = {enable = true},
			highlight = { enable = true },
			indent = { enable = true },
		})
		end
}
