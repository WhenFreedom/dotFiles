
mpd=$(mpc current)
time="%T"

autoload -Uz promptinit && promptinit
setopt PROMPT_SUBST

t1='%F{#FC3400}'  #line theme
t2='%F{#FCB500}'  #icon theme
t3='%F{#FFFFFF}'  #user theme
t4='%F{#FFFFFF}'  #mpd theme
t5='%F{#FFFFFF}'  #time theme
t6='%F{#00EFFC}'  #directory theme
t7='%F{#DF1D1D}'  #shell state theme

user=${t1}'['${t2}' '${t3}'%n'${t1}']'
mpd=${t1}'['${t2}' '${t4}$(mpc current)${t1}']'
time=${t1}'['${t2}' '${t5}${time}${t1}']'
directory=${t1}'['${t2}' '${t6}'%~'${t1}']'
shState=${t7}'%# '


line0=$'\n%B${t1}'
line1=$'┏${user}\n'
line2=$'┃${time}━${directory}\n'
line3=$'┗${shState}'
styleEnd=$'%f%b'

PROMPT="${line0}${line1}${line2}${line3}${styleEnd}"

zle_highlight=(default:bold,fg=#D0FF00)
