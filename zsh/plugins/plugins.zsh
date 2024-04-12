setPlug () {
  for i in $(ls "$plugDir" | grep "\.zsh"); do
    if [[ ! "$i" =~ "test" ]]; then
    source "${plugDir}/$i"
    fi
  done
}
getPlugin() {
  plugConf=~/.config/zsh/plugins
  plugDir=${plugConf}/$(echo "$1" | awk -F '/' '{print $2}')
  if [[ ! -d ${plugDir} ]]; then
    git clone https://github.com/$1 ${plugDir}
    setPlug
  else
    setPlug
  fi
}

getPlugin "zsh-users/zsh-autosuggestions"
getPlugin "hcgraf/zsh-sudo"
getPlugin "agkozak/zsh-z"
