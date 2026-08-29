// ======================================
// ĐĂNG NHẬP
// ======================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("loginUsername").value;

        const message =
            document.getElementById("loginMessage");


        message.style.color = "#2563eb";

        message.textContent =
            `Xin chào ${username}! Chức năng đăng nhập sẽ được kết nối Backend sau.`;

    });

}


// ======================================
// ĐĂNG KÝ
// ======================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("registerMessage");


        if (password !== confirmPassword) {

            message.style.color = "#dc2626";

            message.textContent =
                "Mật khẩu nhập lại không khớp.";

            return;
        }


        message.style.color = "#16a34a";

        message.textContent =
            "Đăng ký thành công! Backend sẽ xử lý tài khoản sau.";

    });

}


// ======================================
// TRA CỨU HỌC PHÍ
// ======================================

const tuitionForm =
    document.getElementById("tuitionForm");


if (tuitionForm) {

    tuitionForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const code =
            document.getElementById("studentCode").value;


        const result =
            document.getElementById("tuitionResult");


        /*
            HIỆN TẠI CHƯA CÓ BACKEND.

            Sau này sẽ thay đoạn này bằng:

            fetch("http://127.0.0.1:8000/students/...")
        */


        result.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🔄
                </div>

                <h3>
                    Đã nhận mã ${code}
                </h3>

                <p>
                    Sau này Backend sẽ trả về
                    thông tin học phí của học sinh.
                </p>

            </div>

        `;

    });

}


// ======================================
// TRA CỨU ĐIỂM THƯỞNG
// ======================================

const rewardForm =
    document.getElementById("rewardForm");


if (rewardForm) {

    rewardForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const code =
            document
            .getElementById("rewardStudentCode")
            .value;


        const result =
            document.getElementById("rewardResult");


        result.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🔄
                </div>

                <h3>
                    Đã nhận mã ${code}
                </h3>

                <p>
                    Sau này Backend sẽ trả về
                    điểm thưởng và minh chứng.
                </p>

            </div>

        `;

    });

}