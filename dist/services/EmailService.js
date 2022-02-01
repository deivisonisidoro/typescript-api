"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DTO => Data Transfer Object (DDD)  
class EmaiService {
    sendMail({ to, message }) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}
exports.default = EmaiService;
