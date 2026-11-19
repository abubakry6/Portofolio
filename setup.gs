/**
 * ============================================================================
 * PROJEK : Modern Portfolio Web App (Google Apps Script)
 * MODUL  : Inisialisasi & Setup Sistem (setup.gs)
 * ENGINE : ZettBOT Core v1.0.0 (by Zettbos)
 * ============================================================================
 * Standar Safe Migration: Idempoten, non-destruktif, dan tanpa underscore (_)
 */

/**
 * Inisialisasi konfigurasi awal portofolio.
 * Jalankan fungsi ini satu kali dari editor Google Apps Script jika ingin
 * menyiapkan integrasi penyimpanan pesan kontak ke Google Spreadsheet.
 */
function setupPortfolioSystem() {
  try {
    var ss;
    var props = PropertiesService.getScriptProperties();
    var existingSheetId = props.getProperty('PORTFOLIO_SPREADSHEET_ID');

    if (existingSheetId) {
      try {
        ss = SpreadsheetApp.openById(existingSheetId);
        Logger.log('Spreadsheet yang sudah ada ditemukan: ' + ss.getUrl());
      } catch (e) {
        Logger.log('Spreadsheet ID lama tidak valid, membuat baru...');
        ss = null;
      }
    }

    if (!ss) {
      ss = SpreadsheetApp.create('Database Portofolio Kontak');
      props.setProperty('PORTFOLIO_SPREADSHEET_ID', ss.getId());
      Logger.log('Spreadsheet baru berhasil dibuat: ' + ss.getUrl());
    }

    // Nama tab wajib PascalCase / Spasi, DILARANG menggunakan underscore (_)
    var sheetName = 'Pesan Kontak';
    var sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      
      // Hapus sheet default 'Sheet1' jika ada dan tab baru sudah siap
      var defaultSheet = ss.getSheetByName('Sheet1');
      if (defaultSheet && ss.getSheets().length > 1) {
        ss.deleteSheet(defaultSheet);
      }
    }

    // Header baku untuk menampung pesan kontak jika form diaktifkan
    var headers = ['Waktu Kirim', 'Nama Pengirim', 'Email', 'Subjek', 'Isi Pesan', 'Status'];
    
    // Cek apakah header sudah terpasang (Safe Migration)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      
      // Format visual header yang rapi
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#1e293b');
      headerRange.setFontColor('#ffffff');
      
      Logger.log('Header tab "' + sheetName + '" berhasil diinisialisasi.');
    } else {
      Logger.log('Tab "' + sheetName + '" sudah memiliki struktur data. Safe migration aktif (data aman).');
    }

    Logger.log('Setup portofolio selesai dengan sukses!');
    return {
      success: true,
      spreadsheetUrl: ss.getUrl()
    };
  } catch (error) {
    Logger.log('Gagal menjalankan setup: ' + error.toString());
    return {
      success: false,
      error: error.toString()
    };
  }
}

