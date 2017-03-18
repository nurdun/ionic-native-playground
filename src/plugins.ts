import {CameraPage} from "./pages/camera/camera";
import {ActionSheetPage} from "./pages/action-sheet/action-sheet";
import {BarcodeScannerPage} from "./pages/barcode-scanner/barcode-scanner";
import {BatteryStatusPage} from "./pages/battery-status/battery-status";
import {BrightnessPage} from "./pages/brightness/brightness";
import {CardIOPage} from "./pages/card-io/card-io";
import {ClipboardPage} from "./pages/clipboard/clipboard";
import {ContactsPage} from "./pages/contacts/contacts";
import {DevicePage} from "./pages/device/device";
import {DeviceAccountsPage} from "./pages/device-accounts/device-accounts";
import {MarketPage} from "./pages/market/market";
import {KeyboardPage} from "./pages/keyboard/keyboard";
import {GooglePlusPage} from "./pages/google-plus/google-plus";
import {GoogleMapsPage} from "./pages/google-maps/google-maps";

class Plugin {
  constructor(
    public name: string,
    public component: any
  ){}
}


export default [
  new Plugin('Action Sheet', ActionSheetPage),
  new Plugin('Barcode Scanner', BarcodeScannerPage),
  new Plugin('Battery Status', BatteryStatusPage),
  new Plugin('Brightness', BrightnessPage),
  new Plugin('Camera', CameraPage),
  new Plugin('CardIO', CardIOPage),
  new Plugin('Clipboard', ClipboardPage),
  new Plugin('Contacts', ContactsPage),
  new Plugin('Device', DevicePage),
  new Plugin('Device Accounts', DeviceAccountsPage),
  new Plugin('Market', MarketPage),
  new Plugin('Keyboard', KeyboardPage),
  new Plugin('Google Plus', GooglePlusPage),
  new Plugin('Google Maps', GoogleMapsPage)
];

