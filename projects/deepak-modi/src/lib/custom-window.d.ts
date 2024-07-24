// custom-window.d.ts
interface KommunicateGlobals {
  _globals?: any;
  // Add other properties if needed
}

interface Window {
  kommunicate: KommunicateGlobals;
}
