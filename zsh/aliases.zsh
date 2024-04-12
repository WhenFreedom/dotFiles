alias sudo='sudo '
alias ls='ls --color=auto'
alias mkdir='mkdir -p -v'
alias spotify='LD_PRELOAD=/usr/local/lib/spotify-adblock.so spotify-launcher'
code () { vscodium }
alias kmonade='kmonad ~/.config/kmonad/keyboard.kbd'
chmox () { chmod +x $1 }

editor () {
  case $2 in
	 n)
		nvim $1
		;;
	 c)
		codium - $1
		;;
	 *)
		echo "Unknown Command"
		;;
  esac
}

creConf () {
  alias ${1}d="cd ~/.config/${1}"
  alias ${1}c="cd ~/.config/${1}; editor ~/.config/${1}/${2}"
}

## Hyprland ##
creConf "hypr"      "hyprland.conf"
creConf "zsh"       ".zshrc"
creConf "waybar"    "config.jsonc"
creConf "kmonad"    "keyboard.kbd"
creConf "eww"       "eww.yuck"
creConf "mpd"       "mpd.conf"
creConf "mpDris2"   "mpDris2.conf"
creConf "nvim"      "init.lua"
creConf "rofi"      "config.rasi"

#Programming Documents
progd=~/Documents/Programming
rustd=${progd}/Rust/project
progd () {cd $progd}
rustd () {cd $rustd}



#Rofi
alias rofic='nvim ~/.config/rofi/config.rasi'

alias icat="kitty +kitten icat"
