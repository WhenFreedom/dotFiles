from libqtile import bar, layout, qtile, widget
from libqtile.config import Click, Drag, Group, Key, Match, Screen
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal

mod = "mod4"
terminal = guess_terminal()

keys = [
    # move window focus
    Key([mod], "Up", lazy.layout.up()),
    Key([mod], "Down", lazy.layout.down()),
    Key([mod], "Right", lazy.layout.right()),
    Key([mod], "Left", lazy.layout.left()),
    # move windows
    Key([mod, "control"], "Up", lazy.layout.shuffle_up()),
    Key([mod, "control"], "Down", lazy.layout.shuffle_down()),
    Key([mod, "control"], "Right", lazy.layout.shuffle_right()),
    Key([mod, "control"], "Left", lazy.layout.shuffle_left()),
    # resize windows
    Key([mod, "shift"], "Up", lazy.layout.grow_up()),
    Key([mod, "shift"], "Down", lazy.layout.grow_down()),
    Key([mod, "shift"], "Right", lazy.layout.grow_right()),
    Key([mod, "shift"], "Left", lazy.layout.grow_left()),

    Key([mod, "shift"], "r", lazy.restart(), desc="Reload config"),
    Key([mod], "x", lazy.window.kill(), desc="Kill focused window"),
    Key([mod], "u", lazy.window.toggle_fullscreen()),
    Key([mod], "z", lazy.window.toggle_floating())
]

layouts = [
    layout.Columns(margin=5),
    layout.MonadTall()
]
