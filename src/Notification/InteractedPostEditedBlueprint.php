<?php
namespace TheTurk\EditNotifications\Notification;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Post\Post;
use Flarum\User\User;

class InteractedPostEditedBlueprint implements BlueprintInterface
{
    /**
     * @var Post
     */
    public $post;

    /**
     * @var User
     */
    public $user;

    /**
     * @param Post $post
     * @param User $user
     */
    public function __construct(Post $post, User $user)
    {
        $this->post = $post;
        $this->user = $user;
    }

    /**
     * {@inheritdoc}
     */
    public function getSubject()
    {
        return $this->post;
    }

    /**
     * {@inheritdoc}
     */
    public function getFromUser()
    {
        return $this->user;
    }

    /**
     * {@inheritdoc}
     */
    public function getData()
    {
    }

    /**
     * {@inheritdoc}
     */
    public static function getType()
    {
        return 'interactedPostEdited';
    }

    /**
     * {@inheritdoc}
     */
    public static function getSubjectModel()
    {
        return Post::class;
    }
}
