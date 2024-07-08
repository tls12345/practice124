document.getElementById('pickButton').addEventListener('click', function() {
    // 학생 번호 배열 (예시)
    var studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // 번호 추첨
    var randomIndex = Math.floor(Math.random() * studentNumbers.length);
    var pickedNumber = studentNumbers[randomIndex];

    // SweetAlert2를 사용하여 팝업 표시
    Swal.fire({
        icon: 'success',
        title: '당첨 번호는 ' + pickedNumber + '번 입니다!',
        showConfirmButton: false,
        timer: 2000
    });
});
