import styled from 'styled-components'

export const ModalDel = styled.div`
.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}
.fade.in {
    opacity: 1;
}
.modal {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: block;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
}
.fade {
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
}

.modal.fade.in .modal-dialog {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    -o-transform: translate(0,0);
    transform: translate(0,0);
}
.modal.fade .modal-dialog {
    -webkit-transition: -webkit-transform .3s ease-out;
    -o-transition: -o-transform .3s ease-out;
    transition: transform .3s ease-out;
    -webkit-transform: translate(0,-110%);
    -ms-transform: translate(0,-110%);
    -o-transform: translate(0,-110%);
    transform: translate(0,-110%);
}

.modal-dialog {
    width: 600px;
    margin: 14px auto;
    top: 0;
    position: fixed;
    right: 0;
    left: 0;
}

.modal-content {
    -webkit-box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
    box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
}

.modal-content {
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
    box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
}
.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
}
.modal-body {
    position: relative;
    padding: 15px;
}
.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
}

.modal-header .close {
    margin-top: -2px;
}
button.close {
    -webkit-appearance: none;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
}
.close {
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
}

.modal-title {
    margin: 0;
    line-height: 1.42857143;
}
.h4, h4 {
    font-size: 18px;
}

.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}
.btn {
    align-items: end;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid #cccccc;
    border-radius: 4px;
    min-width: 68px;
    max-height:34px;
}
.modal-footer .btn+.btn {
    margin-bottom: 0;
    margin-left: 5px;
}
.btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}
.btn-sucess {
    color: #fff;
    background-color: #4fd979;
    border-color: #3ad454;
}
p {
    margin: 0 0 10px;
}
.deleteDialogEntityType {
    font-weight: bold;
    padding-left: 2px;
    padding-right: 2px;
}
.bg-danger {
    background: #ef5350;
}
.bg-danger {
    background-color: #f2dede;
}
.text-center {
    text-align: center;
}
.form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
}
.form-group {
    margin-bottom: 15px;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
}
label{
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    margin-right:.5em;
}
`;