# kitty + zsh guide

# 🐱Kitty

- install kitty

```bash
sudo apt install kitty
```

**Config file location:**

If the file doesn't exist, then this command creates it:

```bash
mkdir -p ~/.config/kitty && touch ~/.config/kitty/kitty.conf
```

example config

```jsx
include ~/.config/kitty/theme.conf

# Set font
font_family      FiraCode Nerd Font
bold_font        auto
italic_font      auto
bold_italic_font auto
font_size        13

# Padding
window_padding_width 10

enable_ligatures always

window_margin_width     10
window_border_width     1pt
active_border_color     #44ffff

background_image ~/Downloads/file_0.jpg
```

> The above config uses 2 additional things

### 1. Nerd Fonts

These are necessary. Follow any guide on YT to know more about them.

```bash
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts
wget https://github.com/ryanoasis/nerd-fonts/releases/latest/download/JetBrainsMono.zip
unzip JetBrainsMono.zip && rm JetBrainsMono.zip
fc-cache -fv
```

### 2. A Theme

you can get the themes from Kitty GitHub.

https://github.com/dexpota/kitty-themes

- copy the contents of the theme
- should be from .conf
- save in the ~/.config/kitty/theme.conf

> And you’re good to go

# >\_ zsh

- Install it

```bash
sudo apt install zsh -y
```

## **Set Zsh as Default Shell**

To use Zsh every time you open a terminal, set it as the default shell:

```bash
chsh -s $(which zsh)
```

To verify:

```bash
echo $SHELL
```

## **Install Oh My Zsh (Recommended for Customization)**

Oh My Zsh is a powerful framework for managing Zsh configurations. Install it with:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## **Install Plugins for Auto-Suggestions & Syntax Highlighting**

### **🔹 Auto-Suggestions (Command Suggestions)**

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
echo "source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ~/.zshrc
```

### 🔹 Syntax Highlighting (Colors for Commands)

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.zsh/zsh-syntax-highlighting
echo "source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
```

## **Change Theme (Powerlevel10k for a Beautiful Prompt)**

Powerlevel10k makes your terminal **fast, beautiful, and informative**. Install it:

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Now, set it as the theme in `~/.zshrc`:

```bash
sed -i 's/ZSH_THEME=".*"/ZSH_THEME="powerlevel10k\/powerlevel10k"/' ~/.zshrc
```

Apply changes:

```bash
source ~/.zshrc
```

> You can enable starship prompt as well but **Powerlevel10k** is good as well

# Extra cool stuff

## 1. lsd

To **show icons for directories & files**, install **lsd** (a better `ls` command):

```bash
sudo apt install lsd
```

Then, alias `ls` to `lsd` for **icons & colors**:

```bash
echo 'alias ls="lsd"' >> ~/.zshrc
source ~/.zshrc
```

> I’d say instead of setting an alias try to get used to the “lsd” command itself.

## 2. **fzf – Fuzzy Finder for Command History**

```bash
sudo apt install fzf
```

Press `Ctrl+R` → Search through command history like a boss.

## 3. feh

use it for image preview from the terminal

```bash
sudo apt install feh

ex usage -
feh Downloads/4350144121\(1\).png
```

## 4. Yazi

It is a **blazingly fast terminal file manager** written in Rust.

- You’ll have to install it via snap or cargo

check its official docs on how to use it

https://yazi-rs.github.io/docs/installation
