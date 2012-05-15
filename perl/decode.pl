#!/usr/bin/perl

@alpha = qw(a b c d e f g h i j k l m n o p q r s t u v w x y z);

$input = $ARGV[0];

@cha = split(/\d+/, $input);
@num = split(/[a-z]/, $input);

for($j=0; $j < @cha ; $j++) {
				for($i = 0 ; $i < @alpha ; $i++) {
								if($cha[$j] eq $alpha[$i]) {
												$index = $i;
								}
				}
				$div = $num[$j+1] % 26;

				if($div%2 == 0) {
								$div = $div * (-1);
				}

				if ($index+$div > 25) {
								$pos = $index + $div - 26;
				} elsif ($index+$div < 0) {
								$pos = $index + $div + 26;
				} else {
								$pos = $index + $div;
				}
				print $alpha[$pos];
}
print "\n";
