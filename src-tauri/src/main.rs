#![cfg_attr(
    all(not(debug_assertions), target_os = "macos"),
    windows_subsystem = "macos"
)]

mod command;
mod menu;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![command::hello])
        .menu(menu::generate_menu())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
