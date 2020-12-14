import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import VideoSchema from "../../model/VideoSchema";
import Video from "./Video";

@InputType()
class VideoInput {
  @Field()
  name: String;
  @Field()
  description: String;
  _id: String;
}

@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find();
    return videos;
  }
  @Mutation(() => Video)
  async createVideo(@Arg("videoInput") videoInput: VideoInput) {
    const video = await VideoSchema.create(videoInput);
    return video;
  }
}

export default VideoResolver;
