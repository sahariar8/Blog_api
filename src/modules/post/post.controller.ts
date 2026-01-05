import type { Request, Response } from "express";
import { postService } from "./post.service";
import type { Post } from "../../../generated/prisma/client";



const createPost = async (req: Request, res: Response) => {
    try {
        const result = await postService.createPost(req.body as Omit<Post, "id" | "createdAt" | "updatedAt">);
        res.status(201).json(
            { 
            message: 'Post created successfully',
            data: result,
            }
        );
    } catch (err:any) {
        res.status(500).json(
            {
                message: 'Failed to create post',
                error: err.message,
            }
        );
    }
};

export const postController = {
    createPost,
};