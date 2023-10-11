import axios from "axios"
import { useState, useEffect } from "react";

export default function Dashboard(){
    const [login, setLogin] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/view/dashboard`)
          .then((res) => setLogin(res.data));
      }, []);

    return (
        <div class="container">

    <h3 class="overview-normalize">접속 아이디</h3>
    <p>
        {login.userid}
    </p>
    <hr/>
    <h3 class="overview-normalize">역할</h3>
    <p>
        {login.roles}
    </p>
    <hr/>
    <h3 class="overview-normalize">역할에 따른 페이지 이동 권한 확인</h3>
    <p>
        <button onclick="location.href='/view/setting/admin'" class="btn btn-sm btn-success">관리자 설정 페이지(관리자만)</button>
        <button onclick="location.href='/view/setting/user'" class="btn btn-sm btn-info">유저 설정 페이지(유저만)</button>
    </p>
    <hr/>
    <form method="post" action="/logout">
        <button class="btn btn-sm btn-danger btn-block" type="submit">로그아웃</button>
    </form>
</div>
    )
}