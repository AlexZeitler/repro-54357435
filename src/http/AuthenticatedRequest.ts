import {Request} from "express";
import {UserReference} from "../security/UserReference";

export interface AuthenticatedRequest extends Request {
    user: UserReference
}
