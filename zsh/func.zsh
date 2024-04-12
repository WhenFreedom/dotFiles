dir=~/.config/zsh
src () {
  for i in ${1[@]}; do
    source "${dir}/$i.zsh"
  done
}
