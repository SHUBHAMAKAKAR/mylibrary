function bounceOff(obj1,obj2)
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2)
     {
      obj1.velocityX = obj1.velocityX * (-1);
      obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2)
  {
    obj1.velocityY = obj1.velocityY * (-1);
    obj1.velocityY = obj2.velocityY * (-1);
}


}
function isTouching(gameObject1, gameObject2)

{
  if(gameObject1.x - gameObject2.x < gameObject2.width/2 + gameObject1.width/2 &&
    gameObject2.x - gameObject1.x < gameObject2.width/2 + gameObject1.width/2 &&
    gameObject1.y - gameObject2.y < gameObject2.height/2 + gameObject1.height/2&&
    gameObject2.y - gameObject1.y < gameObject2.height/2 + gameObject1.height/2)
  {
    return true;
  }
  else
  {
    return false;

  }
}