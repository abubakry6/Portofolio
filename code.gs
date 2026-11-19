/**
 * ============================================================================
 * PROJEK : Modern Portfolio Web App (Google Apps Script)
 * ROLE   : Modern Web Developer & Prompt Architect
 * ENGINE : ZettBOT Core v1.0.0 (by Zettbos)
 * ============================================================================
 * Backend Controller untuk menyajikan antarmuka portofolio mandiri.
 */

/**
 * Endpoint utama Web App Google Apps Script.
 * Melayani index.html dengan konfigurasi viewport responsif dan proteksi iframe.
 * 
 * @param {Object} e Event parameter dari request HTTP GET
 * @return {HtmlOutput} Halaman web HTML yang telah dievaluasi
 */
function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index');
  
  var htmlOutput = template.evaluate()
    .setTitle('Abu Bakri | Modern Web Developer & Prompt Architect')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

  return htmlOutput;
}

/**
 * Helper untuk menyertakan file parsial (jika menggunakan arsitektur modular).
 * 
 * @param {string} filename Nama file HTML yang ingin disertakan
 * @return {string} Konten HTML mentah
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Endpoint opsional jika ingin menerima pesan dari formulir kontak ke Google Sheets atau Email.
 * 
 * @param {Object} formData Data formulir dari klien { name, email, message }
 * @return {Object} Status respon { success: boolean, message: string }
 */
function handleContactSubmission(formData) {
  try {
    if (!formData || !formData.email) {
      return { success: false, message: 'Data tidak lengkap.' };
    }

    // Catat ke log eksekusi Google Apps Script
    Logger.log('Pesan baru dari: ' + formData.name + ' (' + formData.email + ')');
    Logger.log('Pesan: ' + formData.message);

    return {
      success: true,
      message: 'Terima kasih! Pesan Anda telah diterima.'
    };
  } catch (error) {
    Logger.log('Error handleContactSubmission: ' + error.toString());
    return {
      success: false,
      message: 'Terjadi kendala saat memproses pesan: ' + error.toString()
    };
  }
}

