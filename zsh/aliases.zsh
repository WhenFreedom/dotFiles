alias ls='ls --color=auto'
alias mkdir='mkdir -p -v'
code () { vscodium -r $1 }
chmox () { chmod +x $1 }
alias swR="sudo pkill -HUP swhkd"
alias icat="kitty +kitten icat"

alias swhkd='swhks & pkexec swhkd --config ~/.config/swhkd/swhkdrc & disown'
