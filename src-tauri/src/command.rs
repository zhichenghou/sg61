#[tauri::command]
pub fn hello(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}