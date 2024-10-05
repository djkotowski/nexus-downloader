use tauri::{AppHandle, Manager};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| {
      let _ = show_window(app);
    }))
    .plugin(tauri_plugin_http::init())
    .plugin(tauri_plugin_fs::init())
    .plugin(tauri_plugin_shell::init())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

fn show_window(app: &AppHandle) {
  let windows = app.webview_windows();

  windows
    .values()
    .next()
    .expect("No window found")
    .set_focus()
    .expect("Failed to focus the window");
}
