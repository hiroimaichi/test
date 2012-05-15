#!/usr/bin/perl

use strict;
use warnings;
use utf8;

use Net::Twitter::Lite;
use Data::Dumper;

=pod

=cut

my %CONSUMER_TOKENS = (
	consumer_key => 'bK8jfObSD0eRiprM67Qvsw',
	consumer_secret => 'SCjIhJXFGLszYDo9QKl0chi4z18zXxZMStJALC34jU'
);

my $ACESS_TOKEN = '14078312-V2ojuQUzPgOgqvFTsaVXT4mMi4w7XmXLiJgmVY3in';
my $ACCESS_TOKEN_SECRET = 'VcT6v0I08XrbWwZgnXxcaGNlOk5jsDbqAQHR7ECg74';

my $t = Net::Twitter::Lite->new(%CONSUMER_TOKENS);

$t->access_token($ACCESS_TOKEN);
$t->access_token_secret($ACCESS_TOKEN_SECRET);

my $status = $t->update({status => 'Perlで投稿テスト'});

print Dumper $status;%
