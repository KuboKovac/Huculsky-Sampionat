### prenasadenie BE
1. stiahnuť do VM nove buildy z gitu
2. vymeniť obsah REST folderu, aby obsahoval novy build
3. spustiť v deploy mašine: 


Commandy pre pracu s BE systemd servicou
```
sudo systemctl stop hucul.service -- vypne system service pre BE 
sudo systemctl status hucul.service -- zobrazi status
sudo systemctl start hucul.service -- zapne BE deamon
sudo systemctl disable hucul.service -- vypne uplne servisu - nezapne sa na reboote
sudo systemctl enable hucul.service -- opak disable, potom treba dať aj štart
sudo systemctl restart hucul.service -- reštart servicu
```