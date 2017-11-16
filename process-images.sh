# cd assets/photos
cd assets/raw-photos

for x in *.jpg; do 
  # echo $x
  # t=$(echo $x | sed 's/[[:blank:]]/\\\ /g');

  convert "${x}" -resize 1200x1200\> "../photos/${x}"
done

for x in *.png; do 
  convert "${x}" -resize 1200x1200\> "../photos/${x}"
done

cd $OLDPWD
