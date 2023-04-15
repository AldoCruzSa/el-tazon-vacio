import React from "react";

import { format } from "date-fns";
import Link from "next/link";

import { Pagination, IPaginationProps } from "../pagination/Pagination";
import { PostItems } from "../utils/Content";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <div>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>
              <Card>
                <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
                  <CardMedia
                    component="img"
                    image={elt.image}
                    alt="post image"
                    sx={{ width: "8rem" }}
                  />
                  <CardContent sx={{ width: "20rem" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {elt.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {format(new Date(elt.date), "LLL d, yyyy")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Link>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </div>
);

export { BlogGallery };
