export class Modal {
  
  //モーダルopen
  openModal(idStr: any): void {
    idStr.addClass('show');
    $('body').append('<p>')
    $('modal-backdrop').addClass('show');
    idStr.css('display', 'block');
  }

  //モーダル削除
  async closeModal(idStr: any): Promise<void> {
    const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
    // 時間設定
    await sleep(1000);
    //取得
    // let modalContents = $('#exampleModalToggle');
    let modalBackGround = $('.modal-backdrop');
    //削除
    idStr.removeClass('show');
    modalBackGround.removeClass('show');
    idStr.css('display', 'none');
  }
}
